import React, { useRef } from 'react'
import { toast } from 'react-toastify'
import { useStoreContext } from '../context/store'
import { views } from '../utils'

const SetBudget = () => {
    const { setState, defaults, balance } = useStoreContext()
    const inputRef = useRef(null)
    console.log(balance)
    const handleClick = () => {
        if (balance < Number(inputRef.current.value)) {
            toast.error("Please you don't have sufficient balance")
        } else if (inputRef.current.value < 16) {
            toast.error(`Budget minimum is 16 ${defaults.standardUnit} `)
        }
        else if (inputRef.current !== null && inputRef.current.value !== '') {
            setState(prev => ({
                ...prev,
                budget: inputRef.current.value,
                view: views.DEPLOY
            }))
        } else {
            alert('Please enter a valid budget')
        }
    }
    return (
        <div className='main-con'>
            <div className=" wager">
                <input
                    className='amount-input'
                    type='number'
                    placeholder='budget amount'
                    ref={inputRef}
                />
                <span >{defaults.standardUnit}</span>
            </div>
            <p className="text">Budget minimum is <b>16 {defaults.standardUnit}</b> </p>
            <br />
            <button
                onClick={handleClick}
            >Set budget</button>
        </div>
    )
}

export default SetBudget