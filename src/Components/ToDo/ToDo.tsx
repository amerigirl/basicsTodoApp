import React from "react";
import toDoList from "../../Data/ToDoList";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  title: {
    color: "black",
        textDecoration: "underline",
        marginBottom: "20px",
    fontSize: "25px",
  },
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10px",
    backgroundColor: "#f0f0f0",
    marginLeft: "35%",
      marginRight: "35%",
    padding: "1.5% 5% 5% 5%",
    borderRadius: "30px",
  },
    subText: {
   
      marginTop: 0,
        fontSize: "23px",
        color: "red",
    },
    listItem: {
        fontSize: "20px",
    }
});

const ToDo = () => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <h2 className={classes.title}>Task List</h2>
      <p className={classes.subText}>Click a task to get the deets!</p>
      <ul>
        {toDoList.map((todo) => (
            <li key={todo.id} className={classes.listItem}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
