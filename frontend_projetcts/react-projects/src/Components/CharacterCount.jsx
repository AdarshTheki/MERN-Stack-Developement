import React, { useState } from 'react';

export default function CharacterCount() {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div className='wrapper'>
            <h2>Character Counter</h2>
            <textarea
                rows='4'
                cols='50'
                value={text}
                onChange={handleChange}
                placeholder='Type something...'></textarea>
            <p>Character Counter : {text.length}</p>
        </div>
    );
}
