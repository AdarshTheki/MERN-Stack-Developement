import React, { useState } from 'react';

export default function Test() {
    return (
        <div className='wrapper'>
            <h2>Custom tooltip :</h2>
            <Tooltip text={'Hello I m tool tip text!'}>
                <button>Hover Me.</button>
            </Tooltip>

            <Tooltip text={'I am Here About That.'}>
                <button>Hover second</button>
            </Tooltip>
        </div>
    );
}

function Tooltip({ text, children }) {
    const [showTooltip, setShowTooltip] = useState(false);

    function handleMouseEnter() {
        setShowTooltip(true);
    }

    function handleMouseLeave() {
        setShowTooltip(false);
    }

    return (
        <div
            className='tooltip-container'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {showTooltip && <div className='tooltip'>{text}</div>}
            {children}
        </div>
    );
}
