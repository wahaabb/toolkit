import { useState, useEffect } from 'react';
import '../Styles/Pages/countdown.css'; 

const App = () => {
  const [timer, setTimer] = useState();
  const [isRunning, setIsRunning] = useState(false);
  const [showTimeUpMessage, setShowTimeUpMessage] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && isRunning) {
      setIsRunning(false);
      setShowTimeUpMessage(true);
    
      setTimeout(() => setShowTimeUpMessage(false), 3000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, timer]);

  const startTimer = () => {
    if (timer > 0) {
      setTimer(timer);
      setIsRunning(true);
      setShowTimeUpMessage(false);
    }
    else if (timer == null) {
     alert ("A number is required!!!")
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimer(0); 
    setIsRunning(false);
    setShowTimeUpMessage(false);
  };

  return (
    <div className="counter " >
      <div className="counter-wrapper">
        <h1 className='text-light'>Countdown Timer</h1>
        <h2 className='text-light'>Enter time in seconds</h2>

        <div className="counter-input-section">
          <input
            type="number"
            value={timer}
            disabled={isRunning}
            onChange={(e) => setTimer(Number(e.target.value))}
            id="counter-input"
            className="counter-input"
          />
        </div>

        <div className="counter-display">
          <span className="counter-number">{timer}</span>
        </div>

        {showTimeUpMessage && (
          <div className="times-up-message">
            <span>⏰ Time's Up!</span>
          </div>
        )}

        
        <div className="counter-buttons">
          <button onClick={startTimer} className="counter-btn start">Start</button>
          <button onClick={stopTimer} className="counter-btn stop">Stop</button>
          <button onClick={resetTimer} className="counter-btn reset">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
