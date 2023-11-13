import React from "react";
import "../styles/ToDoLoading.css";

const ToDosLoading = () => {
  return (
    <div className="LoadingToDo-container">
      <span className="LoadingToDo-completeIcon"></span>
      <p className="LoadingToDo-text">CARGANDO To Do's</p>
      <span className="LoadingToDo-deleteIcon"></span>
    </div>
  );
};

export { ToDosLoading };
