"use client";
import { css } from "@emotion/css";
import { useState } from "react";

interface Props {
  message: string;
}

const Message = (props: Props) => {
  const [message] = useState(JSON.parse(props.message));

  return <div className={styles.message}>{message.body}</div>;
};

const styles = {
  message: css({
    display: "block",
    backgroundColor: "white",
    margin: "10px auto",
    boxShadow: "0 5px 15px -5px rgba(0, 0, 0, 0.2)",
    padding: "10px 20px",
    borderRadius: "5px",
    clear: "both",

    "&.me": {
      color: "white",
      float: "right",
      backgroundColor: "#328ec4",
    },
  }),
};

export default Message;
