import React from "react";
import { Link } from "react-router-dom";

const TodoList = ({ todos, updateTodos }) => {
  function deleteTodo(i) {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    updateTodos(newTodos);
  }

  return (
    <ul>
      {todos.map((todo, i) => (
        <li
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "300px",
            marginBottom: "1rem",
          }}
          key={i}
        >
          <Link to={`/todo/${i}?ref=${todo}`}>{todo}</Link>
          <button type="button" onClick={(i) => deleteTodo(i)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
