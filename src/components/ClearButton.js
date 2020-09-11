import React, { useContext } from "react";
import { Global } from "../contexts/Global";

function ClearButton() {
  const { items, clearAll, isEditting } = useContext(Global);
  return (
    <>
      {items.length > 2 && !isEditting && (
        <button onClick={clearAll} className="clear-button">
          clear
        </button>
      )}
    </>
  );
}

export default ClearButton;
