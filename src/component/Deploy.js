import { useStoreContext } from '../context/store'

const Deploy = () => {
    const { defaults, budget, deploy } = useStoreContext()
    return (
        <div className=" wager">
            <p>Wager (pay to deploy): <strong>{budget}</strong> {defaults.standardUnit}</p>
            <br />
            <button
                onClick={deploy}
            >Deploy</button>
        </div>
    )
}

export default Deploy