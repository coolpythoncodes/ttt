import React from 'react'
import { useStoreContext } from '../context/store'

const SelectRole = () => {
    const { deploy } = useStoreContext()
    return (
        <div className="deployorattach">
            <p>Please select a player:</p>
            <div className='player-btn'>
                <button onClick={deploy}>Play as X</button>
            </div>
            <p> (Set the wager, deploy the contract.)</p>
            <div className='player-btn'>
                <button>Play as O</button>
            </div>
            <p>(Attach to the Deployer's contract.)</p>
        </div>
    )
}

export default SelectRole