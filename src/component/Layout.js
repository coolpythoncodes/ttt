import React from 'react'
import { useStoreContext } from '../context/store'

const Layout = ({ children }) => {
    const { player } = useStoreContext()
    return (
        <div className="deployorattach">
            {
                player &&
                <h2>Player {player}</h2>
            }

            {children}
        </div>
    )
}

export default Layout