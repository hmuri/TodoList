import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(["자기", "놀기", "먹기"]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((task, i) => i != index);
    setTasks(newTasks);
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
          <div key={index}>
            {task}
            <div onClick={() => handleDelete(index)}> 삭제 </div>
          </div>
        ))}
      </div>
      <div>##################################</div>
      <div>
        {doneTasks.map((task, index) => (
          <div key={index}>{task}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
