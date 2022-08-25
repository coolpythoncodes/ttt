import { useStoreContext } from "../context/store";
import { initialState } from "../utils";

const Done = () => {
    const { gameOutcome, setState, balance, defaults } = useStoreContext()

    const handlePlayAgain = () => setState(initialState)



    return (
        <div className="main-con">
            <p>Thank you for playing. The outcome of this game was:</p>
            <br /><p>{gameOutcome || 'Unknown'}</p>
            <br />
            <p>Your balance is: {balance} {defaults.standardUnit}</p>
            <button onClick={handlePlayAgain}>Play again</button>
        </div>
    )
}

export default Done;