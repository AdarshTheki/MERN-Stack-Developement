import { useEffect, useRef, useState } from 'react';

export const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const timerRef = useRef<number | null>(null);

    const stopTimer = () => {
        if (timerRef.current) {
            window.clearInterval(timerRef.current);
        }
    };

    useEffect(() => {
        timerRef.current = window.setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 100);

        return () => stopTimer();
    }, []);

    return (
        <div>
            Hook Time - {timer} - <button onClick={stopTimer}>Stop Timer</button>
        </div>
    );
};
