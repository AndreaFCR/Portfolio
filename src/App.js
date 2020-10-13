import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
