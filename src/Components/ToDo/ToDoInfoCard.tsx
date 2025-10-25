import React from "react";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  title: {
    color: "purple",
    textDecoration: "underline",
  },
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2rem",
    backgroundColor: "pink",
    marginLeft: "35%",
    marginRight: "35%",
    padding: "1.5% 5% 5% 5%",
    borderRadius: "30px",
  },
  text: {
      fontSize: "20px",
      color: "purple",
      textDecoration: "underline",

  },
});
const ToDoInfoCard = () => {
    const classes = useStyles();
    //create a boolean and turn this into a ternary that shows the card only when a task is clicked
    return <div className={classes.div}>
        <h2 className={classes.text}>Card</h2>
    </div>;
};

export default ToDoInfoCard;
