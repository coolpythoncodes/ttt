import React, { useState } from 'react'
import { useStoreContext } from '../context/store';

const Attacher = () => {
    const [ctcInfoStr, setCtcInfoStr] = useState("");

    const { attach } = useStoreContext()

    return (
        <div className="wager main-con">
            <p>Please paste the contract info to attach to:</p>
            <br />
            <textarea spellCheck="false"
                className='ContractInfo'
                onChange={(e) => setCtcInfoStr(e.target.value)}
                placeholder='Please paste the contract info here'
            />
            <br />
            <button
                disabled={!ctcInfoStr}
                onClick={() => attach(ctcInfoStr)}
            >Attach</button>
        </div>
    )
}

export default Attacher