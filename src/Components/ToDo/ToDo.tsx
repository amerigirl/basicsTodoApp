import React from "react";
import toDoList from "../../Data/ToDoList";
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
        marginTop: "10px",
        backgroundColor: "#f0f0f0",
        marginLeft:"40%",
        marginRight: "40%",
        padding: "1.5% 5% 5% 5%",
        borderRadius: "30px",
    }
});

const ToDo = () => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <h2 className={classes.title}>Task List</h2>
      <ul>
        {toDoList.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
