import React, { useRef } from 'react'
import { useStoreContext } from '../context/store'
import { views } from '../utils'

const SetBudget = () => {
    const { setState, defaults } = useStoreContext()
    const inputRef = useRef(null)
    const handleClick = () => {
        if (inputRef.current !== null) {
            setState(prev => ({
                ...prev,
                budget: inputRef.current.value,
                view: views.DEPLOY
            }))
        }
    }
    return (
        <div>
            <div className=" wager">
                <input
                    className='amount-input'
                    type='number'
                    placeholder='Set a wager'
                    ref={inputRef}
                />
                {defaults.standardUnit}
            </div>
            <br />
            <button
                onClick={handleClick}
            >Set budget</button>
        </div>
    )
}

export default SetBudget