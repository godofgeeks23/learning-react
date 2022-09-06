import React from "react"
import ReactDOM from "react-dom"
import Main from './components/Main'
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="main_container">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
