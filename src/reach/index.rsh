'reach 0.1';

const SQAURES = 9;
const BOARD = Array(Bytes(1), SQAURES)

const STATE = Object({
  playerTurn: Bool,
  board: BOARD,
  xCost: UInt,
  oCost: UInt,
})

const board = Array.replicate(9, " ")
const squareCostArray = array(UInt, [3000000, 2000000, 3000000, 2000000, 4000000, 2000000, 3000000, 2000000, 3000000])


const errIsMoveInBoard = "A square in the board should be selected"
const errIsMoveValid = "The square has been played by a player already"

const initialGameState = (player) => ({
  playerTurn: player,
  board,
  xCost: 0,
  oCost: 0,
})


const checkWin = (b) => {

  const [p0, p1, p2, p3, p4, p5, p6, p7, p8] = [...b];

  const row1 = p0 == p1 && p0 == p2 ? p0 : '-'
  const row2 = p3 == p4 && p3 == p5 ? p3 : '-'
  const row3 = p6 == p7 && p6 == p8 ? p6 : '-'

  const col1 = p0 == p3 && p0 == p6 ? p0 : '-'
  const col2 = p1 == p4 && p1 == p7 ? p1 : '-'
  const col3 = p2 == p5 && p2 == p8 ? p2 : '-'

  const leftDiagonal = p0 == p4 && p0 == p8 ? p0 : '-'
  const rightDiagonal = p2 == p4 && p2 == p6 ? p2 : '-'

  if (row1 == 'x' || row2 == 'x' || row3 == 'x' || col1 == 'x' || col2 == 'x' || col3 == 'x' || leftDiagonal == 'x' || rightDiagonal == 'x') {
    return 0
  }
  else {
    if (row1 == 'o' || row2 == 'o' || row3 == 'o' || col1 == 'o' || col2 == 'o' || col3 == 'o' || leftDiagonal == 'o' || rightDiagonal == 'o') {
      return 1
    } else {
      return 2
    }
  }
}


// helper function

// check if the move is not outside the board
const isMoveInBoard = (move) => (0 <= move && move < SQAURES)


// check if the squared has been selected by a player
const isMoveValid = (state, move) => {
  const p1 = state.board[move];
  return !(p1 == "x" || p1 == "o")
}


const getValidSquare = (interact, gameState) => {
  const _move = interact.getSquareSelected(gameState)
  assume(isMoveInBoard(_move), errIsMoveInBoard)
  assume(isMoveValid(gameState, _move), errIsMoveValid)
  return declassify(_move)
}

const addMoveCost = (prevCost, newCost) => {
  return prevCost + newCost
}


const applyPlayerMove = (state, move, budget) => {
  require(isMoveInBoard(move), errIsMoveInBoard)
  require(isMoveValid(state, move), errIsMoveValid)
  const player = state.playerTurn
  const costPerSquare = budget / 16000000
  return {
    playerTurn: !player,
    board: (player ? state.board.set(move, "x") : state.board.set(move, "o")),
    xCost: player ? addMoveCost(state.xCost, (squareCostArray[move] * costPerSquare)) : state.xCost,
    oCost: player ? state.oCost : addMoveCost(state.oCost, (squareCostArray[move] * costPerSquare))
  }
}

const isAllSquaresFilled = (state) => Array.all(state.board, (square) => (square === 'x' || square === 'o')) // All squares filled

const hasGameEnd = (state) => {
  const winStatus = checkWin(state.board)
  return isAllSquaresFilled(state) || winStatus == 1 || winStatus == 0
}


const commonInteract = {
  ...hasRandom,
  getSquareSelected: Fun([STATE], UInt),
  seeBoard: Fun([STATE], Null),
  seeOutcome: Fun([UInt], Null),
  endsWith: Fun([STATE], Null),
  informTimeOut: Fun([], Null),
  deadline: UInt,
}

const AInteract = {
  ...commonInteract,
  budget: UInt,
}

const BInteract = {
  ...commonInteract,
  acceptBudget: Fun([UInt], Bool)
}

export const main = Reach.App(() => {
  const A = Participant('Alice', AInteract);
  const B = Participant('Bob', BInteract);
  init();


  const informTimeOut = () => {
    each([A, B], () => {
      interact.informTimeOut();
    });
  }
  // The first one to publish deploys the contract
  A.only(() => {
    const budget = declassify(interact.budget);
    const deadline = declassify(interact.deadline);
  });
  A.publish(budget, deadline)
  // .pay(budget);
  commit();

  // The second one to publish always attaches
  // B.interact.acceptBudget(budget);>
  // B.pay(budget).timeout(relativeTime(deadline), () => closeTo(A, informTimeOut));
  B.only(() => {
    const acceptedBudget = declassify(interact.acceptBudget(budget));
  });
  B.publish(acceptedBudget);

  var state = initialGameState(true)

  invariant(balance() >= 0)
  while (!hasGameEnd(state) && (state.xCost + state.oCost) <= (2 * budget)) {
    if (state.playerTurn == true) {
      commit()

      A.only(() => {
        const xMove = getValidSquare(interact, state)
        const xMoveCost = squareCostArray[xMove]
      });
      A.publish(xMove, xMoveCost)
        .pay(xMoveCost)
        .timeout(relativeTime(deadline), () => closeTo(B, informTimeOut));
      A.interact.seeBoard(applyPlayerMove(state, xMove, budget))
      state = applyPlayerMove(state, xMove, budget);
      continue;
    } else {
      commit()

      B.only(() => {
        const oMove = getValidSquare(interact, state)
        const oMoveCost = squareCostArray[oMove]
      });

      B.publish(oMove, oMoveCost)
        .pay(oMoveCost)
        .timeout(relativeTime(deadline), () => closeTo(A, informTimeOut));
      B.interact.seeBoard(applyPlayerMove(state, oMove, budget))
      state = applyPlayerMove(state, oMove, budget);
      continue;

    }
  }
  const outcome = checkWin(state.board)

  const payRatio = (gameOutcome) => {
    if (gameOutcome == 0) { // X (Player A) wins
      return [1, 0]
    } else if (gameOutcome == 1) { // 0(Player B) wins
      return [0, 1];
    } else {
      return [1, 1]
    }

  }

  const aBalance = balance() / 2
  const bBalance = balance() - aBalance

  const aSettlement = (gameOutcome, to) => {
    if (gameOutcome == 0 || gameOutcome == 1) {
      return to * balance()
    } else {
      return to * aBalance
    }
  }

  const bSettlement = (gameOutcome, to) => {
    if (gameOutcome == 0 || gameOutcome == 1) {
      return to * balance()
    } else {
      return to * bBalance
    }
  }


  const [toA, toB] = payRatio(outcome);
  transfer(aSettlement(outcome, toA)).to(A)
  transfer(bSettlement(outcome, toB)).to(B)

  commit();

  each([A, B], () => {
    interact.endsWith(state);
    interact.seeOutcome(outcome);
  })
  // write your program here
  exit();
});
