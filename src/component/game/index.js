import { useStoreContext } from "../../context/store"
import Square from "./Square"

const Game = () => {
  const { chooseSquare, board, playable, player, gameOutcome } = useStoreContext()
  const boardArray = [...Array(9).keys()]
  const message = player.toLowerCase() === "x" ? "Please wait for player O to play" :
    player.toLowerCase() === "o" ? "Please wait for player X to play" :
      ""

  return (
    <div>
      <p>{
        !playable ? `${message}` : ""
      }
      </p>
      <p>
        {
          gameOutcome ? `${gameOutcome}` : ""
        }
      </p>
      <div className="board-container">
        {
          boardArray.map((x, index) => (
            <Square key={index} value={board[index]} chooseSquare={() => chooseSquare(index)} />
          ))
        }
      </div>
    </div>
  )
}

export default Game