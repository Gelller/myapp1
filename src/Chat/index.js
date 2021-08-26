
import '../App.css';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chats from '../Chats';
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from './chatSlice'




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
  const { messagesArray } = useSelector((state) => state.chat);
  const dispatch = useDispatch()
  const classes = useStyles();

  const onSendMessage = (messageText) => {

    if (messageText !== "") {
      dispatch(addMessage({
        text: messageText,
        author: "user",
        time: new Date().toLocaleString()
      }))
    }
  }

  useEffect(() => {
    if (messagesArray.length !== 0 && messagesArray[messagesArray.length - 1].author === "user") {
      setTimeout(() => {
        dispatch(addMessage({
          text: messagesArray[messagesArray.length - 1].text,
          author: "robot",
          time: new Date().toLocaleString()
        }))
      }, getRandomInt(100, 2000));

    }
  }, [messagesArray])


  console.log(messagesArray)
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
