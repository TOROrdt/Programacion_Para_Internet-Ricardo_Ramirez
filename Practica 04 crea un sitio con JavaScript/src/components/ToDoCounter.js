import React from "react";
import "../styles/ToDoCounter.css";

const ToDoCounter = ({ completed, total }) => {
  return (
    <h2 className="ToDoCounter">
      {`Has completado ${completed} de ${total} To Do's`}
    </h2>
  );
};

export { ToDoCounter };
