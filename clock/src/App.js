import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const handleIncrementSession = (e, length) => {
    e.preventDefault();
    setSessionLength((length) => (
      length + 1
    ))

  }
  const handleDecrementSession = (e, length) => {
    e.preventDefault();
    setSessionLength((length) => (
      length - 1
    ))

  }
  const handleIncrementBreak = (e, length) => {
    e.preventDefault();

    setBreakLength((length) => (length + 1))
  }
  const handleDecrementBreak = (e, length) => {
    e.preventDefault();

    setBreakLength((length) => (length - 1))
  }
  return (
    <div className="App">
      <header className="App-header">
        <div id="break-label"> Break Length = {breakLength}

        </div>
        <div id="session-label">Session Length = {sessionLength}</div>
        <button id="break-decrement" onClick={(e) => handleDecrementBreak(e, breakLength)}>Decrement-B</button>
        <button id="session-decrement" onClick={(e) => handleDecrementSession(e, sessionLength)}>Decrement-s</button>

        <button id="break-increment" onClick={(e) => handleIncrementBreak(e, breakLength)}>Increment-B</button>
        <button id="session-increment" onClick={(e) => handleIncrementSession(e, sessionLength)}>Increment-s</button>
      </header>
    </div>
  );
}

export default App;
