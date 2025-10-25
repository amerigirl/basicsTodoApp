import React from "react";
import toDoList from "../../Data/ToDoList";

const ToDo = () => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {toDoList.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
