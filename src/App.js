import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [tasks, setTasks] = useState(["Play", "Sleep", "Code"]);
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

  const handleDelete = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleAddTask}>추가</button>
      <div>
        {tasks.map((task, index) => (
          <TaskBox>
            {" "}
            <div key={index}>
              {task} {index}
            </div>
            <div>완료</div>
            <DeleteText onClick={() => handleDelete(index)}>삭제</DeleteText>
          </TaskBox>
        ))}
        ###################################################
        <div>완료된 일</div>
      </div>
    </div>
  );
}

export default App;

const TaskBox = styled.div`
  width: 500px;
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
`;

const DeleteText = styled.div`
  color: red;
  cursor: pointer;
`;
