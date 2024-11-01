
import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ initialTime }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(timerId);
        }
    }, [timeLeft]);

    return (
        <div className="countdown-timer">
            <h1>{timeLeft} seconds left</h1>
        </div>
    );
};

export default CountdownTimer;
