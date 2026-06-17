import React, { useState, useEffect, useRef } from 'react';
import './EventsPage.css';

export const EventsPage: React.FC = () => {
  // Example 1: Basic Click Event
  const [clickCount, setClickCount] = useState(0);
  const onButtonClick = () => {
    setClickCount((prev) => prev + 1);
  };

  // Example 2: Keyboard & Event Object
  const [lastKeyPressed, setLastKeyPressed] = useState('None');
  const onKeyup = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setLastKeyPressed(event.key);
  };

  // Example 3: Key Modifiers
  const [savedMessage, setSavedMessage] = useState('');
  const messageInputRef = useRef<HTMLInputElement>(null);
  const onKeyUpEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && messageInputRef.current) {
      setSavedMessage(messageInputRef.current.value);
      messageInputRef.current.value = '';
    }
  };

  // Example 4: Mouse Events
  const [hoverStatus, setHoverStatus] = useState('Outside box');
  const [boxColor, setBoxColor] = useState('#21262d');
  const onMouseEnter = () => {
    setHoverStatus('Inside box!');
    setBoxColor('#58a6ff');
  };
  const onMouseLeave = () => {
    setHoverStatus('Outside box');
    setBoxColor('#21262d');
  };

  // Example 5: Form Events (Focus/Blur/Input)
  const [focusStatus, setFocusStatus] = useState('Not focused');
  const [inputValue, setInputValue] = useState('');
  const onFocus = () => setFocusStatus('Focused!');
  const onBlur = () => setFocusStatus('Lost focus');
  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Example 6: Global Events (Window/Document)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Example 7: Custom Events (Output)
  const emitCustomEvent = () => {
    console.log("Hello from the child component!");
    alert("Custom event emitted! (Check console for output)");
  };

  return (
    <div className="lesson-container">
      <h2>Event Listeners in React</h2>
      <p className="lesson-intro">In React, you bind to DOM events using camelCase attributes (like <code>onClick</code>, <code>onChange</code>, or <code>onKeyUp</code>) and pass a function reference as the handler: <code>onClick={"{"}onButtonClick{"}"}</code>.</p>

      <div className="example-card">
        <h3>1. Basic Click Event <code>onClick</code></h3>
        <p className="explanation">The most common event. Pass the event handler function directly to the camelCase event attribute.</p>
        <div className="demo-box">
          <button className="btn" onClick={onButtonClick}>Click Me!</button>
          <p>You clicked the button: <strong>{clickCount}</strong> times.</p>
        </div>
      </div>

      <div className="example-card">
        <h3>2. Passing the Event Object</h3>
        <p className="explanation">The event object is automatically passed as the first argument to the event handler function, providing detailed event information.</p>
        <div className="demo-box">
          <p>Type below to see the last key pressed:</p>
          <input type="text" className="input-field" onKeyUp={onKeyup} placeholder="Type something..." />
          <p>Last key: <span className="badge">{lastKeyPressed}</span></p>
        </div>
      </div>

      <div className="example-card">
        <h3>3. Handling Specific Keys</h3>
        <p className="explanation">React does not have built-in key modifiers. You check the <code>event.key</code> property inside the handler function to respond to specific keys like Enter.</p>
        <div className="demo-box">
          <p>Type a message and press Enter to save:</p>
          <input 
            ref={messageInputRef}
            type="text" 
            className="input-field" 
            onKeyUp={onKeyUpEnter}
            placeholder="Press Enter to save..." 
          />
          {savedMessage && <div className="success-message">Saved: {savedMessage}</div>}
        </div>
      </div>

      <div className="example-card">
        <h3>4. Mouse Events <code>onMouseEnter / onMouseLeave</code></h3>
        <p className="explanation">React to mouse hover states by triggering state updates inside event handlers.</p>
        <div 
          className="demo-box" 
          style={{ backgroundColor: boxColor, transition: 'background-color 0.2s' }}
          onMouseEnter={onMouseEnter} 
          onMouseLeave={onMouseLeave}
        >
          <p style={{ textAlign: 'center', margin: '10px 0', fontWeight: 'bold' }}>{hoverStatus}</p>
        </div>
      </div>

      <div className="example-card">
        <h3>5. Form Events <code>onFocus / onBlur / onChange</code></h3>
        <p className="explanation">Track input changes and focus states. In React, use <code>onChange</code> (which behaves like native <code>input</code> event) to listen to input changes.</p>
        <div className="demo-box">
          <input type="text" className="input-field" onFocus={onFocus} onBlur={onBlur} onChange={onInput} placeholder="Interact with me..." />
          <p>Status: <span className="badge">{focusStatus}</span></p>
          <p>Current Value: <strong>{inputValue}</strong></p>
        </div>
      </div>

      <div className="example-card">
        <h3>6. Global Events</h3>
        <p className="explanation">For global events like <code>window</code> resize, register and clean up listeners manually inside a <code>useEffect</code> hook.</p>
        <div className="demo-box">
          <p>Resize your browser window to see this update:</p>
          <p>Window width is: <span className="badge">{windowWidth}px</span></p>
        </div>
      </div>

      <div className="example-card">
        <h3>7. Custom Events (Callback Props)</h3>
        <p className="explanation">In React, components communicate custom actions by invoking callback functions passed down from parent components as props (e.g., <code>onCustomEvent</code>).</p>
        <div className="demo-box">
          <button className="btn" onClick={emitCustomEvent}>Trigger Callback</button>
          <p style={{ fontSize: '0.9em', color: '#8b949e', marginTop: '10px' }}>(Check the console or pass a callback prop from a parent component)</p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
