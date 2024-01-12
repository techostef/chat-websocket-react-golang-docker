"use client";
import { KeyboardEvent, useEffect, useState } from "react";
import { connect, sendMsg } from "../api";
import ChatHistory from "./ChatHistory";
import ChatInput from "./ChatInput";
import Header from "./Header";

const Chat = () => {
  const [chatHistory, setChatHistory] = useState<MessageEvent[]>([]);
  useEffect(() => {
    connect((msg) => {
      setChatHistory((prevState) => [...prevState, msg]);
    });
  }, []);

  const send = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13 && (event.target as any).value) {
      sendMsg((event.target as any).value);
      (event.target as any).value = "";
    }
  };

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </div>
  );
};

export default Chat;
