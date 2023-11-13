import React from "react";
import { TbCircleCheck } from "react-icons/tb";
import { TiDeleteOutline } from "react-icons/ti";
import "../styles/ToDoItem.css";

function ToDoItem(props) {
  const active = props.completed === true ? "Icon-check--active" : "";
  const complete = props.completed === true ? "ToDoItem-p--complete" : "";

  return (
    <li className="ToDoItem">
      <span className={`Icon Icon-check ${active}`} onClick={props.onComplete}>
        <figure>
          <TbCircleCheck />
        </figure>
      </span>

      <p className={`ToDoItem-p ${complete}`}>{props.text}</p>

      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <TiDeleteOutline />
      </span>
    </li>
  );
}

export { ToDoItem };
