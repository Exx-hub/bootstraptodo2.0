import React from "react";
import "./App.css";

import TodoItems from "./components/TodoItems";
import FormInput from "./components/FormInput";
import ClearButton from "./components/ClearButton";
import GlobalContextProvider from "./contexts/Global";
import Header from "./components/Header";
import { Jumbotron } from "react-bootstrap";

function App() {
  return (
    <div className="app">
      <Jumbotron className="jumbo pt-5" style={{ backgroundColor: "#161a17" }}>
        <GlobalContextProvider>
          <Header />
          <FormInput />
          <TodoItems />
          <ClearButton />
        </GlobalContextProvider>
      </Jumbotron>
    </div>
  );
}

export default App;
