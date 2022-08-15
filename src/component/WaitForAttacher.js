import React from 'react'
import { useStoreContext } from '../context/store'

const WaitForAttacher = () => {
    const { contractInfo } = useStoreContext()

    const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds))
    const copyToClipboard = async (button) => {
        navigator.clipboard.writeText(contractInfo);
        const origInnerHTML = button.innerHTML;
        button.innerHTML = "Copied!";
        button.disabled = true;
        await sleep(1000);
        button.innerHTML = origInnerHTML;
        button.disabled = false;
    }
    return (
            <div className="wager">
                <p>Waiting for (Player O) to join...</p>
                <br />
                <p>Please give them this contract info:</p>
                <pre className='ContractInfo'>
                    {contractInfo}
                </pre>
                <button
                    onClick={(e) => copyToClipboard(e.currentTarget)}
                >Copy to clipboard</button>
            </div>
    )
}

export default WaitForAttacher