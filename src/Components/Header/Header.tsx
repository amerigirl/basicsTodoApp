import React from "react";
import type { JSXElement } from "@fluentui/react-components";
import { makeStyles, Tab, TabList } from "@fluentui/react-components";

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
      <TabList defaultSelectedValue="tab2">
        <Tab>Home</Tab>
        <Tab>Home</Tab>
        <Tab>Home</Tab>
        <Tab>Home</Tab>
      </TabList>
    </div>
  );
};

export default Header;
