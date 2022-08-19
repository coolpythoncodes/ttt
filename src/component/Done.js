import { useStoreContext } from "../context/store";
import { initialState } from "../utils";

const Done = () => {
    const { gameOutcome, setState } = useStoreContext()

    const handlePlayAgain = () => setState(initialState)

    return (
        <div>
            Thank you for playing. The outcome of this game was:
            <br />{gameOutcome || 'Unknown'}
            <br />
            <button onClick={handlePlayAgain}>Play again</button>
        </div>
    )
}

export default Done;