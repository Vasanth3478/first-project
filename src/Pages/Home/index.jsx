import React, { useRef, useEffect } from 'react';

function Home() {
  const timerRef = useRef(null); // Store the timer ID
  const [seconds, setSeconds] = React.useState(0);

  useEffect(() => {
    // Start a timer when the component mounts
    timerRef.current = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => {
      clearInterval(timerRef.current);
    };
  }, []); // Empty dependency array, so it runs only once on mount

  return (
    <div>
      <p>Time: {seconds} seconds</p>
    </div>
  );
}

export default Home;
