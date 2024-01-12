"use client";
import { css } from "@emotion/css";
import Message from "./Message";

interface Props {
  chatHistory: MessageEvent[];
}

const ChatHistory = (props: Props) => {
  const messages = props.chatHistory.map((msg, index) => (
    <Message key={index} message={msg.data} />
  ));

  return (
    <div className={styles.chatHistory}>
      <h2>Chat History</h2>

      <div className={styles.messagesContainer}>{messages}</div>
    </div>
  );
};

const styles = {
  chatHistory: css({
    backgroundColor: "#f7f7f7",
    margin: 0,
    padding: "20px",
    h2: {
      margin: 0,
      padding: 0,
    },
  }),
  messagesContainer: css({
    maxHeight: "calc(100vh - 200px)",
    overflowY: "auto",
  }),
};

export default ChatHistory;
