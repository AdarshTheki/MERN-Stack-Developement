/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Accordion({ title = '', children, isOpen, onToggle }) {
    return (
        <div className={`accordion ${isOpen ? 'open' : ''}`}>
            <h3 onClick={onToggle}>
                {title} {isOpen ? '▲' : '▼'}
            </h3>
            <div className='accordion-content'>{children}</div>
        </div>
    );
}

export default function Test() {
    const [openPanels, setOpenPanels] = useState([]);

    function handleToggle(index) {
        setOpenPanels((prev) => {
            const isOpen = prev.includes(index);
            if (isOpen) {
                return prev.filter((item) => item !== index); // close
            } else {
                return [...prev, index]; // open
            }
        });
    }

    const handleExpandAll = () => {
        setOpenPanels(Array.from({ length: 5 }, (_, index) => index)); // Open all panels
    };

    const handleCollapseAll = () => {
        setOpenPanels([]); // Close all panels
    };

    return (
        <div className='wrapper'>
            {openPanels.length ? (
                <button onClick={handleCollapseAll}>Collapse All</button>
            ) : (
                <button onClick={handleExpandAll}>Expand All</button>
            )}
            {Array.from({ length: 5 }, (_, index) => (
                <Accordion
                    key={index}
                    title={`Hello world ${index + 1}`}
                    isOpen={openPanels.includes(index)}
                    onToggle={() => handleToggle(index)}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis numquam
                    neque temporibus? Laborum nam molestias illum quidem consequatur eos aliquid
                    vitae aperiam reprehenderit id aliquam, non ratione maiores ullam ipsa.
                </Accordion>
            ))}
        </div>
    );
}
