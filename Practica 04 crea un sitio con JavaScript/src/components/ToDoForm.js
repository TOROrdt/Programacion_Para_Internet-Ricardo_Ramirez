import React from "react";
import "../styles/ToDoForm.css";

const ToDoForm = ({ addToDo, openModal, setOpenModal }) => {
  const [newToDoValue, setNewToDoValue] = React.useState("");
  const [msgTextArea, setMsgTextArea] = React.useState("Escribe tu To Do");

  const onChange = (event) => {
    setNewToDoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (newToDoValue === "") {
      setMsgTextArea(
        "Aun no escribes nada, debes escribir algo para agregarlo"
      );
    } else {
      addToDo(newToDoValue);
      setOpenModal(false);
      setNewToDoValue("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva tarea</label>
      <textarea
        placeholder={`${msgTextArea}`}
        value={newToDoValue}
        onChange={onChange}
      />

      <div className="ToDoForm-buttonContainer">
        <button
          className="ToDoForm-button ToDoForm-button-cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="ToDoForm-button ToDoForm-button-add">
          Añadir
        </button>
      </div>
    </form>
  );
};

export { ToDoForm };
