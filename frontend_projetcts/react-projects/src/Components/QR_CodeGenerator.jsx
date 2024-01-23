import React, { useState } from 'react';
import QRCode from 'react-qr-code';

export default function QR_CodeGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateCode() {
        setQrCode(input);
        setInput('');
    }

    return (
        <div className='wrapper'>
            <h2>QR Code Generator</h2>
            <div>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    type='text'
                    name='qqr-code'
                    placeholder='Enter you value here'
                />
                <button
                    disabled={input && input.trim() !== '' ? false : true}
                    onClick={handleGenerateCode}>
                    Generator
                </button>
            </div>
            <div>
                <QRCode id='qr-code-value' value={qrCode} />
            </div>
        </div>
    );
}
