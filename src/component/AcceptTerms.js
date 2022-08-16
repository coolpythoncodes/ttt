import { useStoreContext } from "../context/store";
import { views } from "../utils";

const AcceptTerms = () => {
    const { budget, defaults, resolveAcceptedP, setState, disableButton } = useStoreContext()
    const termsAccepted = () => {
        setState(prev => ({
            ...prev,
            disableButton: true
        }))
        resolveAcceptedP()
        setState(prev => ({
            ...prev,
            disableButton: false,
            view: views.WAIT_FOR_TURN,
        }))
    }
    return (
        <div className="wager">
            <p>The terms of the game are:</p>
            <br />
            <p>Wager: {budget} {defaults.standardUnit}</p>
            <br />
            <button
                disabled={disableButton}
                onClick={termsAccepted}
            >Accept terms and pay wager</button>
        </div>
    )
}

export default AcceptTerms