import React from "react";
import type { JSXElement } from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "columnn",
    justifyContent: "flex-start",
    padding: "50px 20px",
    rowGap: "20px",
  },
});

const Header = (): JSXElement => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <h1>Let's Get Some Work Done!</h1>
    </div>
  );
};

export default Header;
