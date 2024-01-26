import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

//  Create OnClick OutSide Custom Hook
export default function OnClickOutside() {
    const ref = useRef(null);
    const [showContent, setShowContent] = useState(false);

    useOutsideClick(ref, () => setShowContent(false));

    return (
        <div className='wrapper'>
            <h2>Create OnClick OutSide Custom Hook</h2>
            {showContent ? (
                <div ref={ref}>
                    <h4>This is a Random content</h4>
                    <p>
                        Please click Outside to close this. Would not close if ou click inside of
                        this content
                    </p>
                </div>
            ) : (
                <button onClick={() => setShowContent(true)}>Show Content</button>
            )}
        </div>
    );
}

function useOutsideClick(ref, handler) {
    useEffect(() => {
        function listItem(event) {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        }

        document.addEventListener('mousedown', listItem);
        document.addEventListener('touchstart', listItem);

        return () => {
            document.removeEventListener('mousedown', listItem);
            document.removeEventListener('touchstart', listItem);
        };
    }, [handler, ref]);
}
