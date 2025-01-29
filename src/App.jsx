import { useState } from "react";
import "./App.css";
import { IoMdAddCircle } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addItem = () => {
    if (inputValue.trim()) {
      if (editIndex !== null) {
        // Update existing task
        const updatedTasks = [...tasks];
        updatedTasks[editIndex].text = inputValue;
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, { text: inputValue, completed: false }]);
      }
      setInputValue("");
    }
  };

  const handleCheck = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEdit = (index) => {
    setInputValue(tasks[index].text);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center m-3">TO DO LIST</h1>
      <div className="flex justify-center">
        <input
          type="text"
          className="border-2 border-black rounded-lg p-2 block inline"
          placeholder="Add a task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <IoMdAddCircle
          className="inline ml-2 text-4xl text-blue-500 cursor-pointer"
          onClick={addItem}
        />
      </div>
      <div>
        <ul className="mt-5">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-md w-2/5 m-auto mt-2"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-4"
                  checked={task.completed}
                  onChange={() => handleCheck(index)}
                />
                <span
                  style={{ textDecoration: task.completed ? "line-through" : "none" }}
                >
                  {task.text}
                </span>
              </div>
              <FaPencilAlt onClick={() => handleEdit(index)} className="cursor-pointer" />
              <RiDeleteBin6Line
                onClick={() => handleDelete(index)}
                className="text-red-500 cursor-pointer hover:text-red-700"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
