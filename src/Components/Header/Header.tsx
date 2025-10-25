import React from "react";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    margin: 0,
    width: "100%",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    color: "black",
  },
});

const Header = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Let's Get Some Work Done!</h1>
    </div>
  );
};

export default Header;
