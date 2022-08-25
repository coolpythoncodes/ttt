import { toast } from "react-toastify";
import { useStoreContext } from "../context/store";
import { views } from "../utils";

const AcceptTerms = () => {
    const { budget, defaults, resolveAcceptedP, setState, disableButton, balance } = useStoreContext()
    const termsAccepted = () => {
        setState(prev => ({
            ...prev,
            disableButton: true
        }))
        if (Number(balance) < Number(budget)) {
            toast.error("Please you don't have sufficient balance")
            setState(prev => ({
                ...prev,
                disableButton: false,
            }))
        } else {
            resolveAcceptedP(true)
            setState(prev => ({
                ...prev,
                disableButton: false,
                view: views.WAIT_FOR_TURN,
            }))
        }
    }
    return (
        <div className="wager">
            <p>The terms of the game are:</p>
            <br />
            <p>Budget: {budget} {defaults.standardUnit}</p>
            <br />
            <button
                disabled={disableButton}
                onClick={termsAccepted}
            >Accept terms</button>
        </div>
    )
}

export default AcceptTerms