import { useStoreContext } from '../context/store'

const ConnectAccount = () => {
    const { connect, disableButton } = useStoreContext()
    return (
        <div>
            <h1>Connect Account</h1>
            <button
                disabled={disableButton}
                onClick={connect}
            >
                Connect account
            </button>
            <h4>Welcome to Budget Tic-Tac-Toe</h4>
            <p>The goal is not just to win, but to stay within a budget.</p>
            <p>Each move comes at a cost equivalent to the number of wins attainable in that space. A draw splits the pot without returning your initial stake.</p>
        </div>
    )
}

export default ConnectAccount