import React from "react";

import Main from "./components/index";
import Container from "./container/container";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Main name="moyin" age="25" /> <br />
        <Container />
      </div>
    </React.Fragment>
  );
}

export default App;
