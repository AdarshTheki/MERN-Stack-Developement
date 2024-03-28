/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';

export default function Test() {
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    return (
        <div>
            <h2>Modal</h2>

            {/* Click Outside The Dismiss Menu */}
            <h3>Custom Dropdown Menu</h3>
            <DropdownMenu options={dropdownOptions} />

            {/* Stacked Modal */}
            <h3>Stacked Modals</h3>
            <button onClick={() => setModal1Open(true)}>Open Modal 1</button>
            <StackedModal isOpen={modal1Open} onClose={() => setModal1Open(false)}>
                <h2>Modal 1 Content</h2>
                <p>This is the content of modal 1.</p>
            </StackedModal>

            <h3>Stacked Modal + Click Outside Dismiss</h3>
            <button onClick={() => setModal2Open(true)}>Open Modal 2</button>
            <Modal isOpen={modal2Open} onClose={() => setModal2Open(false)}>
                <h2>Modal 2 Content</h2>
                <p>This is the content of modal 2.</p>
            </Modal>
        </div>
    );
}

function DropdownMenu({ options, maxHeight = '50px' }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        // Function to handle clicks outside the dropdown
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target))
                return setIsOpen(false);
        };
        // Add event listener when component mounts
        document.addEventListener('mousedown', handleClickOutside);
        // Remove event listener when component unmounts
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className='custom-dropdown'>
            <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
            {isOpen && (
                <ul className='custom-dropdown-modal' style={{ maxHeight, overflowX: 'auto' }}>
                    {options.map((option, index) => (
                        <li key={index}>
                            <a href={option}>{option}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

// Advanced Level Modal 2
function Modal({ isOpen, onClose, children }) {
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (isOpen && event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleEscapeKey);
        return () => document.removeEventListener('mousedown', handleEscapeKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className='modal-overlay' onClick={handleOverlayClick}>
            <div className='modal'>
                <button className='close' onClick={onClose}>
                    close
                </button>
                {children}
            </div>
        </div>
    );
}

// Simple Way Modal 1
function StackedModal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <button className='close' onClick={onClose}>
                    close
                </button>
                {children}
            </div>
        </div>
    );
}
