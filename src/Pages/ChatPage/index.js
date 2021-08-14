import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import styles from "./style.module.css";
import { ChatBox } from "../../Components";

const socket = io("localhost:3000/");

const ChatPage = () => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    socket.on("msgfromsvr", (arg) => {
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
    addToChat(newMessage);
    socket.emit("send to server", newMessage);

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
          <input id="newChat" type="text" placeholder="type chat here" />
          <input type="submit" placeholder="send" />
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
