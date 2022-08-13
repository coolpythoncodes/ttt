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
        </div>
    )
}

export default ConnectAccount