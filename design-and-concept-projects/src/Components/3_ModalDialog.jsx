/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

function Modal({ children, isOpen, onClose }) {
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
                    X
                </button>
                <div>{children}</div>
            </div>
        </div>
    );
}

export default function Test() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div>
            <button onClick={toggleModal}>Open Modal</button>
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <h2>Modal Title</h2>
                <h4>This is the modal content.</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit recusandae
                    voluptates nulla aliquid rerum consectetur vero dicta facilis quia velit! Culpa
                    commodi, possimus inventore odio velit asperiores ad dolores quis.z
                </p>
            </Modal>
        </div>
    );
}
