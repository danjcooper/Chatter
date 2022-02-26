import React, { useRef, useEffect, useState } from 'react';
import styles from './style.module.css';

const ChatBox = ({ chatArray }) => {
  const [username, setUsername] = useState(localStorage.getItem('username'));

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatArray]);

  return (
    <>
      <ul>
        {chatArray.map((msg, i) => (
          <li
            key={i}
            className={
              username === msg.username ? styles.sentByUser : styles.username
            }
          >
            <span
              className={
                username === msg.username ? styles.sentByUser : styles.username
              }
            >
              {msg.username}:{' '}
            </span>{' '}
            {msg.message}
          </li>
        ))}
        <div ref={messagesEndRef}></div>
      </ul>
    </>
  );
};

export default ChatBox;
