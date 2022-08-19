import { useStoreContext } from "../../context/store"
import Square from "./Square"

const Game = () => {
  const { chooseSquare, board, } = useStoreContext()
  const boardArray = [...Array(9).keys()]


  return (
    <div>
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