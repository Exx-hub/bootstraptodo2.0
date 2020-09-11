import React, { useContext, useState, useEffect, useRef } from "react";
import Todo from "./Todo";
import { Global } from "../contexts/Global";

function TodoItems() {
  const { items, editItem, isEditting, setIsEditting } = useContext(Global);

  const [editInput, setEditInput] = useState("");

  const [itemId, setItemId] = useState("");

  // for handling edit item before submitting
  const handleEdit = (value, id) => {
    setIsEditting(true);
    setEditInput(value);
    setItemId(id);
  };

  // for updating item value when submitted
  const handleEditSubmit = () => {
    editItem(editInput, itemId);
    setEditInput("");
    setIsEditting(false);
  };

  // focus input for edit //

  const editRef = useRef(null);

  useEffect(() => {
    if (isEditting) {
      editRef.current.focus();
    }
  }, [isEditting]);

  return (
    <>
      {isEditting ? (
        <div className="add-form">
          <input
            type="text"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            ref={editRef}
            className="edit-input"
          />
          <button onClick={handleEditSubmit} className="edit-button">
            Update
          </button>
        </div>
      ) : (
        <div>
          {items.map((todo) => (
            <Todo key={todo.id} todo={todo} handleEdit={handleEdit} />
          ))}
        </div>
      )}
    </>
  );
}

export default TodoItems;
