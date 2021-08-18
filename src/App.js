
import './App.css';
import React, { useState, useEffect } from 'react';


const structureMessage = {
  text: "",
  author: "",
  time: ""
};



function App() {

  const [inputMessage, setInputMessage] = useState("");
  const [messagesArray, setmessagesArray] = useState([])
  const onSendMessage = () => {
    if (inputMessage !== "") {
      var newMessage = Object.create(structureMessage);
      newMessage.text = inputMessage
      newMessage.time = new Date().toLocaleString();
      newMessage.author = "user"
      setmessagesArray(prev => [...prev, newMessage])
      setInputMessage('')
    }
  }

  useEffect(() => {
    if (messagesArray.length !== 0 && messagesArray[messagesArray.length - 1].author === "user") {
      setTimeout(() => {
        var newRobotMessage = Object.create(structureMessage);
        console.log(messagesArray)
        newRobotMessage.text = messagesArray[messagesArray.length - 1].text
        newRobotMessage.time = new Date().toLocaleString();
        newRobotMessage.author = "robot"

        setmessagesArray(prev => [...prev, newRobotMessage])
      }, getRandomInt(100, 2000));

    }
  }, [messagesArray])



  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <div className="mainWrapper">
      <div className="messageList">
        {
          messagesArray.map((message, i) => (<div key={i} className="inputText"> {message.author + ":" + message.text} <div className="time">{message.time}</div> </div>))
        }

      </div>

      <div className="inputWrapper">
        <input className="input" value={inputMessage}
          onChange={e => setInputMessage(e.target.value)}
          onKeyDown={({ key }) => {
            if (key === 'Enter') {
              onSendMessage()
            }
          }} />
        <button onClick={onSendMessage} className="buttonOnClick">Отправить</button>
      </div>
    </div>
  );
}

export default App;
