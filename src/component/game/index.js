import { useStoreContext } from "../../context/store"
import Square from "./Square"

const Game = () => {
  const { chooseSquare, board, balance, defaults } = useStoreContext()
  const boardArray = [...Array(9).keys()]


  return (
    <div className="main-con">
      <p>Starting balance: {balance} {defaults.standardUnit}</p>

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