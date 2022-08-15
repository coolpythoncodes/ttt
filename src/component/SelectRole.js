import { useStoreContext } from "../context/store"
import { views } from "../utils"

const SelectRole = () => {
    const { setState } = useStoreContext()
    const handlePlayerX = () => setState(prev => ({
        ...prev,
        player: "X",
        view: views.SET_BUDGET
    }))

    const handlePlayerO = () => setState(prev => ({
        ...prev,
        player: "O",
        view: views.ATTACH
    }))
    return (
        <div className="deployorattach">
            <p>Please select a player:</p>
            <div className='player-btn'>
                <button onClick={handlePlayerX}>Play as X</button>
            </div>
            <p> (Set the wager, deploy the contract.)</p>
            <div className='player-btn' onClick={handlePlayerO}>
                <button>Play as O</button>
            </div>
            <p>(Attach to the Deployer's contract.)</p>
        </div>
    )
}

export default SelectRole