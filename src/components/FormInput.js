import React, { useContext, useState, useRef, useEffect } from "react";
import { Global } from "../contexts/Global";

function Form() {
  const [input, setInput] = useState("");

  const { addItem, isEditting } = useContext(Global);

  const handleAdd = (e) => {
    e.preventDefault();
    if (input) {
      addItem(input);
      setInput("");
    }
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (!isEditting) {
      inputRef.current.focus();
    }
  }, [isEditting]);

  return (
    <>
      {!isEditting && (
        <form onSubmit={handleAdd} className="add-form">
          <input
            type="text"
            placeholder="add an item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ref={inputRef}
            className="add-input"
          />
          <button type="submit" className="add-button">
            Add Todo
          </button>
        </form>
      )}
    </>
  );
}

export default Form;

/* <Form onSubmit={handleAdd}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="add an item"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              ref={inputRef}
            />
          </Form.Group>
          <Button type="submit">Add Item</Button>
        </Form> */
