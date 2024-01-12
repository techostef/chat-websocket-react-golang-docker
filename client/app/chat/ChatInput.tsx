"use client";
import { css } from "@emotion/css";
import { KeyboardEvent } from "react";

interface Props {
  send: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const ChatInput = (props: Props) => {
  return (
    <div className={styles.chatInput}>
      <input onKeyDown={props.send} />
    </div>
  );
};

const styles = {
  chatInput: css({
    width: "95%",
    display: "block",
    margin: "auto",

    input: {
      padding: "10px",
      margin: 0,
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid rgba(0, 0, 0, 0.1)",
      width: "98%",
      boxShadow: "0 5px 15px -5px rgba(0, 0, 0, 0.1)",
    },
  }),
};

export default ChatInput;
