import React from "react";
import { AppUI } from "./AppUI";
import { UseLocalStorage } from "./UseLocalStorage";

// const defaultToDos = [
//   { text: "barrer el cuarto", completed: true },
//   { text: "trapear el cuarto", completed: true },
//   { text: "limpiar el escritorio", completed: false },
//   { text: "hacer tarea", completed: false },
// ];

function App() {
  // const [toDos, saveToDos] = useLocalStorage("TODOS_V1", []);
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
  } = UseLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedToDos = toDos.filter((toDo) => toDo.completed === true);
  const totalCompleted = completedToDos.length;
  const totalToDos = toDos.length;

  let searchedToDos = [];

  if (searchValue.length === 0) {
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter((toDo) => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    });
  }

  const completeToDo = (text) => {
    const index = toDos.findIndex((toDo) => toDo.text === text);
    const newToDos = [...toDos];
    if (newToDos[index].completed === true) newToDos[index].completed = false;
    else newToDos[index].completed = true;
    saveToDos(newToDos);
  };

  const deleteToDo = (text) => {
    const index = toDos.findIndex((toDo) => toDo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(index, 1);
    saveToDos(newToDos);
  };

  const addToDo = (text) => {
    const newToDos = [...toDos];
    newToDos.push({
      text: text,
      completed: false,
    });
    saveToDos(newToDos);
  };

  return (
    <AppUI
      error={error}
      loading={loading}
      toDos={toDos}
      totalToDos={totalToDos}
      totalCompleted={totalCompleted}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
      addToDo={addToDo}
      openModal={openModal}
      setOpenModal={setOpenModal}
    />
  );
}

export default App;
