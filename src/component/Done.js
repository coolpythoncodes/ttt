import { useStoreContext } from "../context/store";
import { initialState } from "../utils";

const Done = () => {
    const { gameOutcome, setState, balance, defaults } = useStoreContext()

    const handlePlayAgain = () => setState(initialState)



    return (
        <div>
            Thank you for playing. The outcome of this game was:
            <br />{gameOutcome || 'Unknown'}
            <br />
            <p>Your balance is: {balance} {defaults.standardUnit}</p>
            <button onClick={handlePlayAgain}>Play again</button>
        </div>
    )
}

export default Done;