import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleAddTask}>추가</button>
      <div>
        {tasks.map((task, index) => (
          <div key={index}>{task}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
