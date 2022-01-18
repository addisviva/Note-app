import React from 'react'

function Header({ handleToggleDarkMode  }) {
    return (
        <div className="header">
            <h2 >Notes</h2>
            <button 
            className="save"
            onClick={() =>
                handleToggleDarkMode(
                    (previousDarkMode) => !previousDarkMode
                )
            }
            >Toggle Mode</button>
        </div>
    )
}

export default Header
