import { useState } from "react";
import "./App.css";
import ColorButton from "./components/ColorButton";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div className="pageContainer" style={{background: color}}>
        <h1>Vite+React</h1>
        <h2>Color Changing App</h2>
        <ColorButton color="Red" onClick={() => setColor("red")} />
        <ColorButton color="Blue" onClick={() => setColor("blue")} />
        <ColorButton color="Green" onClick={() => setColor("green")} />
      </div>
    </>
  );
}

export default App;
