import React, { useState, useRef, useEffect } from 'react';

function Video ({
    src = 'https://ak.picdn.net/shutterstock/videos/1044255715/preview/stock-footage-person-signing-important-document-camera-following-tip-of-the-pen-as-it-signs-crucial-business.webm'
}) {
    const [speed, setSpeed] = useState(1);
    const videoRef = useRef();
    console.log(videoRef);
    useEffect(() => {
        
        videoRef.current.playbackRate = speed;
    }, [speed])
    return (
            <div>
                <video muted autoPlay loop ref={videoRef}>
                    <source src={src} />
                </video>
            <div>
                <button onClick={() => setSpeed(s => s /2 )}>slow</button>
                <button onClick={() => setSpeed(s => s * 2)}>fast</button>
                <p>Current Speed: {speed} </p>
            </div>
        </div>
    )
}


export default Video;