import React from "react";
import "../styles/ToDoSearch.css";

function ToDoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="ToDoSearch"
      placeholder="Tarea a buscar"
      onChange={onSearchValueChange}
      value={searchValue}
    />
  );
}

export { ToDoSearch };
