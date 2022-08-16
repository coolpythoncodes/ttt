
const Square = ({ chooseSquare, value }) => {
  return (
    <div
      className={`square ${value?.toLowerCase() === 'x' ? 'square-x-color' : 'square-o-color'}`}
      onClick={chooseSquare}
    >
      {value}
    </div>
  )
}

export default Square