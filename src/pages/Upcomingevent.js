import React, { useState, useEffect } from 'react';
import './Countdown.css';

const CountdownTimer = () => {
    const [targetDate, setTargetDate] = useState('');
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            if (targetDate) {
                const now = new Date().getTime();
                const distance = new Date(targetDate).getTime() - now;

                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });

                if (distance < 0) {
                    clearInterval(interval);
                    setTimeLeft({});
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    const handleChange = (e) => {
        setTargetDate(e.target.value);
    };

    return (
        <div className="countdown-container">
            <input type="datetime-local" onChange={handleChange} />
            {timeLeft.days !== undefined && (
                <div className="countdown-display">
                    <h1>Time Left:</h1>
                    <p>D.{timeLeft.days}</p>:
                    <p>H.{timeLeft.hours} </p>
                    <p>M.{timeLeft.minutes} </p>
                    <p>S.{timeLeft.seconds} </p>
                </div>
            )}
        </div>
    );
};

export default CountdownTimer;
