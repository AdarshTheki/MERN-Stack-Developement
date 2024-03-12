/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function Test() {
    return (
        <div className='wrapper'>
            <h2>Custom tooltip :</h2>
            <Tooltip text={'Hello I m tool tip text!'} position='bottom'>
                <h2>Hover Me. This is One</h2>
            </Tooltip>
            <br />
            <Tooltip text={'Hello I m tool tip text!'} position='left'>
                <h2>Hover Me</h2>
            </Tooltip>
            <br />
            <Tooltip text={'I am Here About That. I am Here About That.'}>
                <h2>Hover second is Three</h2>
            </Tooltip>
            <Tooltip text={'I am Here About That'} position='right'>
                <h2>Hover second is Three</h2>
            </Tooltip>
        </div>
    );
}

function Tooltip({ text, children, position = 'top' }) {
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
            {showTooltip && (
                <p className='tooltip' style={{ [position]: '100%' }}>
                    {text}
                </p>
            )}
            {children}
        </div>
    );
}
