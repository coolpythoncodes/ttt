import React from 'react'
import { useStoreContext } from '../context/store'

const Layout = ({ children }) => {
    const { player } = useStoreContext()
    return (
        // <div className="deployorattach">
        <div className='App'>
            <div className='App-Wrapper'>
                <p className='App-x'>
                    X
                </p>
                <p className='App-o'>
                    o
                </p>
            </div>
            <header className='App-header'>

                <h1 className='App-title'>
                    Tic Tac Toe
                </h1>
                {
                    player &&
                    <h2>Player {player}</h2>
                }

                {children}
            </header>
        </div>
        // </div>
    )
}

export default Layout