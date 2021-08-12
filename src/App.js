import Message from './Message';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} className="inputText" />

      <Message textToShow={inputText} />
    </div>
  );
}

export default App;
