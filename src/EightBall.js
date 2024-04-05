import React, { useState } from "react";
import './EightBall.css';
import magicEightBallResponses from './responses';

const EightBall = () => {
    const [message, setMessage] = useState(magicEightBallResponses[0].msg);
    const [color, setColor] = useState(magicEightBallResponses[0].color);


    const handleClick = () => {
        console.log('clicked')
        let randomIndex = Math.floor(Math.random() * magicEightBallResponses.length);
        
        
        while (randomIndex === 0) {
            randomIndex = Math.floor(Math.random() * magicEightBallResponses.length);
        }
        console.log(randomIndex)
        setMessage(magicEightBallResponses[randomIndex].msg);
        console.log(magicEightBallResponses[randomIndex].msg)
        setColor(magicEightBallResponses[randomIndex].color);
        console.log(magicEightBallResponses[randomIndex].color);
    };
    return (
        <div className={`EightBall ${color}`} onClick={handleClick}>
            <b className="EightBall-text">{message}</b>
        </div>
    );
};

export default EightBall;
