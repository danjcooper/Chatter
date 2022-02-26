import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import styles from './style.module.css';
import './style.css';
import { ChatBox } from '../../Components';

const socket = io('https://chatter-app-socket.herokuapp.com/');

const ChatPage = () => {
  const [chatHistory, setChatHistory] = useState([
    { username: 'Chatter', message: 'hey, welcome to the room.' },
  ]);

  useEffect(() => {
    socket.on('msgfromsvr', (arg) => {
      addToChat(arg);
    });
  }, []);

  const addToChat = (msg) => {
    setChatHistory((state) => {
      const newHistory = state.slice();
      newHistory.push(msg);
      return newHistory;
    });
  };

  const sendChat = (e) => {
    e.preventDefault();
    const newMessage = e.target.newChat.value;
    const username = localStorage.getItem('username')
      ? localStorage.getItem('username')
      : 'stranger';

    const op = {
      username: username,
      message: newMessage,
    };

    addToChat(op);
    socket.emit('send to server', op);

    e.target.newChat.value = '';
  };

  return (
    <div id='chatContainer'>
      <div className={styles.chatMessages}>
        <ChatBox chatArray={chatHistory} />
      </div>

      <div className={styles.chatInput}>
        <form onSubmit={(e) => sendChat(e)}>
          <label for='newChat'></label>
          <input
            className={styles.newMessage}
            id='newChat'
            type='text'
            placeholder='type chat here'
          />
          <input className={styles.sendButton} type='submit' value='Send' />
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
