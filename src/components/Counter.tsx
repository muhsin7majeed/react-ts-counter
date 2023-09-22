import { useEffect, useState } from "react";
import secondsToHMS from "../utils/secondsToHMS";

const INCREMENT_SPEED = 1000; // Info: In milliseconds

const Counter = () => {
  const [startCount, setStartCount] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!startCount) return;

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, INCREMENT_SPEED);

    return () => {
      clearInterval(interval);
    };
  }, [startCount]);

  const handleStartCount = () => {
    setStartCount((prev) => !prev);
  };

  const handleReset = () => {
    setStartCount(false);
    setCount(0);
  };

  const formatedCount: string = secondsToHMS(count);

  return (
    <div className="counter__container">
      <h2>Click start to start the counter!</h2>

      <p>
        counter: <b>{formatedCount}</b>
      </p>

      <button className="btn-primary" onClick={handleStartCount}>
        {startCount ? "Pause" : "Start"}
      </button>

      <button className="btn-secondary" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
