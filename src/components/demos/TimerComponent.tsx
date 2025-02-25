import { useEffect, useState } from 'react';

function TimerComponent() {
    const [count, setCount] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;
        if (!isPaused) {
            interval = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPaused]); // Re-run effect when isPaused changes

    return (
        <div >
            <h1>Showing timer: useEffect</h1>
            <h3 >{count} Seconds</h3>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setIsPaused(!isPaused)}>
                {isPaused ? 'Resume' : 'Pause'}
            </button>
        </div>
    );
}

export default TimerComponent;