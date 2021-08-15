import React from "react";
import styles from "./style.module.css"

const ChatBox = ({chatArray}) => {
  return (
    <>
      <ul>
        {chatArray.map((msg, i) => (
          <li key={i} className={styles.chatMessage}><span className={styles.username}>{msg.username}: </span> {msg.message}</li>
        ))}
      </ul>
      </>
  );
};


export default ChatBox;