import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-slate-700">Tailwind - Cards</h1>
      <Card
        title="Shoes"
        image="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
        description={"If a dog chews shoes whose shoes does he choose?"}
      />
      <Card
        title="Socks"
        image="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
        description={"Why did the sock go to the doctor? It had a hole in it."}
      />
      <Card
        title="Hats"
        description={
          "Why did the hat go to the doctor? It was feeling a little top heavy."
        }
      />
    </>
  );
}

export default App;
