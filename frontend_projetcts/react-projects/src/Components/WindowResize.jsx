import React, { useLayoutEffect, useState } from 'react';

// useWindowResize / useResponsive Custom Hook
export default function WindowResize() {
    const windowSize = useWindowResize();
    const { width, height } = windowSize;

    return (
        <div className='wrapper'>
            <h2>Window resize Hook</h2>
            <p>Width : {width}</p>
            <p>Height : {height}</p>
        </div>
    );
}

function useWindowResize() {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useLayoutEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}
