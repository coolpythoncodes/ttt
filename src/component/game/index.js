import { useStoreContext } from "../../context/store"
import Square from "./Square"

const Game = () => {
  const { setState, board } = useStoreContext()
  const boardArray = [...Array(9).keys()]
  // const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])

  const chooseSquare = (i) => setState(prev => ({
    ...prev,
    selectedSquare: i,
  }))

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