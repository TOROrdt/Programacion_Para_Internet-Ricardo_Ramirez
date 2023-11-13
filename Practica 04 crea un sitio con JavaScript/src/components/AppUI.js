import React from "react";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { ToDoButton } from "./ToDoButton";
import { Modal } from "./Modal";
import { ToDoForm } from "./ToDoForm";
import { ToDosError } from "./ToDosError";
import { ToDosLoading } from "./ToDosLoading";
import { EmptyToDos } from "./EmptyToDos";

const AppUI = ({
  error,
  loading,
  toDos,
  totalToDos,
  totalCompleted,
  searchValue,
  setSearchValue,
  searchedToDos,
  completeToDo,
  deleteToDo,
  addToDo,
  openModal,
  setOpenModal,
}) => {
  return (
    <>
      <ToDoCounter completed={totalCompleted} total={totalToDos} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <ToDoList>
        {error && <ToDosError />}
        {loading && <ToDosLoading />}
        {!loading && !toDos.length && <EmptyToDos />}

        {searchedToDos.map((toDo) => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => completeToDo(toDo.text)}
            onDelete={() => deleteToDo(toDo.text)}
          />
        ))}
      </ToDoList>

      {openModal && (
        <Modal>
          <ToDoForm
            addToDo={addToDo}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <ToDoButton setOpenModal={setOpenModal} />
    </>
  );
};

export { AppUI };
