import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Global = React.createContext();

function GlobalContextProvider({ children }) {
  const localData = JSON.parse(localStorage.getItem("todoitems")) || [];

  const [items, setItems] = useState(localData);

  const [isEditting, setIsEditting] = useState(false);

  useEffect(() => {
    localStorage.setItem("todoitems", JSON.stringify(items));
  }, [items]);

  const clearAll = () => {
    setItems([]);
  };
  const addItem = (input) => {
    setItems((prevItems) => {
      return [...prevItems, { title: input, completed: false, id: uuidv4() }];
    });
  };
  const deleteItem = (id) => {
    let filtered = items.filter((item) => item.id !== id);
    setItems(filtered);
  };
  const editItem = (value, id) => {
    console.log(value, id);
    let mapped = items.map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    console.log(mapped);
    setItems(mapped);
  };

  const toggleItem = (id) => {
    let mapped = items.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setItems(mapped);
  };

  return (
    <Global.Provider
      value={{
        items,
        clearAll,
        addItem,
        deleteItem,
        toggleItem,
        editItem,
        isEditting,
        setIsEditting,
      }}
    >
      {children}
    </Global.Provider>
  );
}

export default GlobalContextProvider;
