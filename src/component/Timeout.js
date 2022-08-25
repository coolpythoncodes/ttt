import { useStoreContext } from "../context/store"

const Timeout = () => {
    const { balance, defaults } = useStoreContext()

    return (
        <div>
            <p>There's been a timeout. (Someone took too long.)</p>
            <p>balance: {balance} {defaults.standardUnit}</p>
        </div >
    )
}

export default Timeout
