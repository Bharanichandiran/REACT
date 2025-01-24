import "./index.css";
import { useState } from "react";
import { FaTowerBroadcast } from "react-icons/fa6";
function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim() === "") return; // Prevent adding empty tasks

    setItems((currentItems) => [
      ...currentItems,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
    setNewItem("");
  }

  function handleDelete(id) {
    id.preventDefault();
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="container">
        <label className="header">New item</label>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="input"
          placeholder="Enter your task"
        />
        <button type="submit">ADD</button>
      </form>
      <div className="container1">
        <ul className="list">
          {items.map((item) => (
            <li key={item.id}>
              <label>
                <input type="checkbox" />
                {item.title} {/* Display the title property */}
              </label>
              <button className="delete" onClick={() => handleDelete(item.id)}>
                DELETE
              </button>
            </li>
          ))}
        </ul>
        <FaTowerBroadcast />
      </div>
    </div>
  );
}

export default App;
