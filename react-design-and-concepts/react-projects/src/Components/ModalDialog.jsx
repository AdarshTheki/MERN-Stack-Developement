import React, { useState } from 'react';

export default function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false);

    function togglePopup() {
        setShowModalPopup(!showModalPopup);
    }

    function onClosePopup(){
        setShowModalPopup(false)
    }

    const body = () => <p>Customize Body Is Here Lorem ipsum dolor sit amet.</p>;

    return (
        <div className='wrapper'>
            <h2>Modal Popup:</h2>
            <button onClick={togglePopup}>Open Modal Popup</button>
            {showModalPopup && <ModalDialog body={body()} onClose={onClosePopup} />}
        </div>
    );
}

function ModalDialog({ id, header, body, footer, onClose }) {
    return (
        <div id={id || 'modal'} className='modal'>
            <div className='modal-content'>
                <div className='header'>
                    <h2>{header ? header : 'Header'}</h2>
                    <span onClick={onClose}>&times;</span>
                </div>
                <div className='body'>{body ? body : <p>This is our Modal Body</p>}</div>
                <div className='footer'>{footer ? footer : <h2>Footer</h2>}</div>
            </div>
        </div>
    );
}
