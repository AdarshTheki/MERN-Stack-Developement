import React, { useCallback, useEffect, useRef } from 'react';
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
                <p ref={ref}>
                    Please click Outside to close this. Would not close if ou click inside of this
                    content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                    consequuntur quo praesentium! Natus quas iure tenetur, harum possimus explicabo
                    aperiam illo. Consectetur repellat error fugit eaque unde atque beatae dolorum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto corporis fuga suscipit alias unde cupiditate. Magnam numquam blanditiis, autem quae, et quidem eaque similique officia doloribus earum voluptates hic?
                </p>
            ) : (
                <p onClick={() => setShowContent(true)}>
                    Please click Outside to close this. Would not close if ou click inside of this
                    content.
                    <br />
                    <span>See More</span>
                </p>
            )}
        </div>
    );
}

function useOutsideClick(ref, handler) {
    const handleClickOutside = useCallback(
        (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        },
        [handler, ref]
    );

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [handleClickOutside]);
}
