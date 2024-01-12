"use client";
import { css } from "@emotion/css";

const Header = () => (
  <div className={styles.header}>
    <h2>Realtime Chat App</h2>
  </div>
);

const styles = {
  header: css({
    backgroundColor: "#15223b",
    width: "100%",
    margin: 0,
    padding: "10px",
    color: "white",

    h2: {
      margin: 0,
      padding: 0,
    },
  }),
};

export default Header;
