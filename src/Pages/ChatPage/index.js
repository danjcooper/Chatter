import React, { useState } from "react";
import styles from "./style.module.css";
import { ChatBox } from "../../Components";

const ChatPage = () => {
  const [chatHistory, setChatHistory] = useState([
    "i'm a placeholder, remove me",
  ]);
  // if there is a new chat - add it to the state and render it.

  const sendChat = (e) => {
    e.preventDefault();
    const newMessage = e.target.newChat.value;
    setChatHistory((state) => {
      const newHistory = state.slice();
      newHistory.push(newMessage);
      return newHistory;
    });

    e.target.newChat.value = "";
  };

  return (
    <div>
      <div className={styles.chatMessgaes}>
        <ChatBox chatArray={chatHistory} />
      </div>

      <div className={styles.chatInput}>
        <form onSubmit={(e) => sendChat(e)}>
          <label for="newChat"></label>
          <input id="newChat" type="text" />
          <input type="submit" placeholder="send" />
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
