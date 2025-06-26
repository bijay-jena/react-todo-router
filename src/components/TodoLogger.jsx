import React, { useEffect } from "react";

const TodoLogger = ({ todos }) => {
  useEffect(() => {
    console.log("Todos updated:", todos);
    return () => {
      console.log("Component unmounted");
    };
  }, [todos]);

  return null;
};

export default TodoLogger;
