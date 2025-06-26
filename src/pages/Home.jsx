import React, { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import TodoLogger from "../components/TodoLogger";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    return () => {};
  }, []);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <div>
      <h2>Home - Todo App</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo();
          }
        }}
      />
      <button onClick={addTodo}>Add Todo</button>
      <TodoList todos={todos} updateTodos={setTodos} />
      <TodoLogger todos={todos} />
      {/* <Link to={`/details?todoList=${todos}`}>Details</Link>
       */}

      <button
        type="button"
        onClick={() => navigate("/details", { state: { todoList: todos } })}
      >
        Details
      </button>
    </div>
  );
};

export default Home;
