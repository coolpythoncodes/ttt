'reach 0.1';

const SQAURES = 9;
const BOARD = Array(Bytes(1), SQAURES)

const STATE = Object({
  playerTurn: Bool,
  board: BOARD,
})
const board = Array.replicate(9, " ")


const errIsMoveInBoard = "A square in the board should be selected"
const errIsMoveValid = "The square has been played by a player already"

const initialGameState = (player) => ({
  playerTurn: player,
  board,
})

// check winning combo in row
const row = (b, r) => {
  const n = r * 3
  if (b[n] == b[n + 1] && b[n] == b[n + 2]) {
    return b[n]
  } else {
    return '-'
  }

}

// check winning combo in col
const col = (b, c) => {
  if (b[c] == b[c + 3] && b[c] == b[c + 6]) {
    return b[c]
  } else {
    return '-'
  }
}

// diagonal starting at the column 0 and row 0
const diagonalLeft = (b, c) => {
  if (b[0] == b[4] && b[0] == b[8]) {
    return b[0]
  } else {
    return '-'
  }
}

// diagonal starting at the column 2 and row 0
const diagonalRight = (b, c) => {
  if (b[2] == b[4] && b[2] == b[6]) {
    return b[2]
  } else {
    return '-'
  }
}

const checkWin = (b) => (row(b, 0) == 'x' || row(b, 1) == 'x' || row(b, 2) == 'x' ||
  row(b, 0) == 'o' || row(b, 1) == 'o' || row(b, 2) == 'o' ||
  col(b, 0) == 'x' || col(b, 1) == 'x' || col(b, 2) == 'x' ||
  col(b, 0) == 'o' || col(b, 1) == 'o' || col(b, 2) == 'o' ||
  diagonalLeft(b, 0) == 'x' || diagonalLeft(b, 0) == 'o' ||
  diagonalRight(b, 2) == 'x' || diagonalRight(b, 2) == 'o'
)

const xWon = (b) => (
  row(b, 0) == 'x' || row(b, 1) == 'x' || row(b, 2) == 'x' ||
  col(b, 0) == 'x' || col(b, 1) == 'x' || col(b, 2) == 'x' ||
  diagonalLeft(b, 0) == 'x' || diagonalRight(b, 2) == 'x' 
)

const oWon = (b) => (
  row(b, 0) == 'o' || row(b, 1) == 'o' || row(b, 2) == 'o' ||
  col(b, 0) == 'o' || col(b, 1) == 'o' || col(b, 2) == 'o' ||
  diagonalLeft(b, 0) == 'o' || diagonalRight(b, 2) == 'o'
)

const calculateWinner = (b) => (xWon(b) ? 0 : oWon(b) ? 1 : 0)

// {

//   if (xWon(b)) {
//     return 0
//   }else if (oWon(b)){
//     return 1
//   }else {
//     return 2
//   }
// }
// helper function

// check if the move is not outside the board
const isMoveInBoard = (move) => (0 <= move && move < SQAURES)


// check if the squared has been selected by a player
const isMoveValid = (state, move) => (!(state.board[move] == "x" || state.board[move] == "o"))


const getValidSquare = (interact, state) => {
  const _move = interact.getSquareSelected(state)
  assume(isMoveInBoard(_move), errIsMoveInBoard)
  assume(isMoveValid(state, _move), errIsMoveValid)
  return declassify(_move)
}

const applyPlayerMove = (state, move) => {
  require(isMoveInBoard(move), errIsMoveInBoard)
  require(isMoveValid(state, move), errIsMoveValid)
  const player = state.playerTurn
  return {
    playerTurn: !player,
    board: (player ? state.board.set(move, "x") : state.board.set(move, "o"))
  }
}

const isAllSquaresFilled = (state) => Array.all(state.board, (square) => (square === 'x' || square === 'o')) // All squares filled


const hasGameEnd = (state) => (isAllSquaresFilled(state)) || checkWin(state.board)

const commonInteract = {
  ...hasRandom,
  getSquareSelected: Fun([STATE], UInt),
  seeBoard: Fun([STATE], Null),
  seeOutcome: Fun([UInt], Null),
  endsWith: Fun([STATE], Null),
}

const AInteract = {
  ...commonInteract,
  budget: UInt,
}

const BInteract = {
  ...commonInteract,
  acceptBudget: Fun([UInt], Null)
}

export const main = Reach.App(() => {
  const A = Participant('Alice', AInteract);
  const B = Participant('Bob', BInteract);
  init();
  // The first one to publish deploys the contract
  A.only(() => {
    const budget = declassify(interact.budget);
  });
  A.publish(budget)
    .pay(budget);
  commit();

  // The second one to publish always attaches
  B.interact.acceptBudget(budget);
  B.pay(budget);
  // commit();

  var state = initialGameState(true)
  invariant(balance() == (2 * budget))
  while (!hasGameEnd(state)) {
    if (state.playerTurn == true) {
      commit()

      A.only(() => {
        const xMove = getValidSquare(interact, state)
      });
      A.publish(xMove);
      A.interact.seeBoard(applyPlayerMove(state, xMove))
      state = applyPlayerMove(state, xMove);
      
      continue;
    } else {
      commit()

      B.only(() => {
        const oMove = getValidSquare(interact, state)
      });

      B.publish(oMove);
      B.interact.seeBoard(applyPlayerMove(state, oMove))
      state = applyPlayerMove(state, oMove);
      // B.interact.seeBoard(state)
      continue;

    }
  }
  const outcome = calculateWinner(state.board)
  // const [toA, toB] = xWon(state.board) ? [2, 0] : oWon(state.board) ? [0, 2] : [1, 1];
  // transfer(toA * budget).to(A)
  // transfer(toB * budget).to(B)
  transfer(balance()).to(A)
  commit();

  each([A, B], () => {
    interact.endsWith(state);
    interact.seeOutcome(outcome);
  })
  // write your program here
  exit();
});
