import React from "react";
import "../styles/ToDoButton.css";

function ToDoButton(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="ToDoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { ToDoButton };
