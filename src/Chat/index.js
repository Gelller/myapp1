
import '../App.css';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chats from '../Chats';




const structureMessage = {
  text: "",
  author: "",
  time: ""
};

const useStyles = makeStyles((theme) => ({
  chatWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    colors: theme
  },
  componentWrapper: {
    width: '800px',
    height: '800px',
    border: '1px solid black',
    display: 'flex',
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main

  },
  arrayOfChats: {
    width: '10%',
    height: '800px',
    border: '1px solid black',
    backgroundColor: theme.palette.primary.main
  },
}))

function Chat() {

  const [inputMessage, setInputMessage] = useState("");
  const [messagesArray, setmessagesArray] = useState([])
  const classes = useStyles();

  const onSendMessage = (messageText) => {
    if (messageText !== "") {
      var newMessage = Object.create(structureMessage);

      newMessage.text = messageText
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
    <div className={classes.chatWrapper}>
      <div className={classes.arrayOfChats}>
        <Chats></Chats>
      </div>
      <div className={classes.componentWrapper}>

        <MessageList messagesArray={messagesArray} />
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    </ div>);

}

export default Chat;
