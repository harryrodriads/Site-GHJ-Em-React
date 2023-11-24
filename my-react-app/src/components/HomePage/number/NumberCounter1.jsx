import { useState, useEffect } from 'react';

const NumberCounter = ({ targetNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentNumber < targetNumber) {
        setCurrentNumber((prevNumber) => prevNumber + 1);
      } else {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [currentNumber, targetNumber]);

  return (
    <div>
      <p>{currentNumber}</p>
      {currentNumber === targetNumber}
    </div>
  );
};

export default NumberCounter;