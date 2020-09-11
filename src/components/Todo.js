import React, { useContext } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

import { Global } from "../contexts/Global";

function Todo({ todo, handleEdit }) {
  const { deleteItem, toggleItem } = useContext(Global);
  return (
    <div className={todo.completed ? "completed todo" : "todo"}>
      <span
        style={{ textDecoration: todo.completed && "line-through" }}
        className="todo-title"
        onClick={() => toggleItem(todo.id)}
      >
        {todo.title}
      </span>
      <div className="icons">
        <span className={todo.completed ? "edit-true" : ""}>
          <AiOutlineEdit onClick={() => handleEdit(todo.title, todo.id)} />
        </span>
        <span>
          <TiDeleteOutline onClick={() => deleteItem(todo.id)} />
        </span>
      </div>
    </div>
  );
}

export default Todo;
