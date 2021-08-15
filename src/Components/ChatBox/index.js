import React, {useRef, useEffect} from "react";
import styles from "./style.module.css"

const ChatBox = ({chatArray}) => {

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatArray]);


  return (
    <>
      <ul  >
        {chatArray.map((msg, i) => (
          <li key={i} className={styles.chatMessage}><span className={styles.username}>{msg.username}: </span> {msg.message}</li>
        ))}
        <div ref={messagesEndRef}></div>
      </ul>
      </>
  );
};


export default ChatBox;