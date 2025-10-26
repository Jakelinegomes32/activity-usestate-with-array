import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, `💗 Item ${items.length + 1}`]);
  };

  return (
    <div className="container">
      <h1>useState with array </h1>

      <button onClick={addItem}>Add item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
