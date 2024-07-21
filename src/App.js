import React, { useState } from "react";
import styled from 'styled-components';

function App() {
  const [tasks, setTasks] = useState(["자기","놀기","먹기"]);
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
    // 놀기 index=2
    const newTasks = tasks.filter((task,i) => i != index);
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
           <div key={index}>{task}</div>
           <div>완료</div>
           <DeleteText onClick={() => handleDelete(index)}>삭제</DeleteText>
         </TaskBox>
         ))}
     </div>
     ##################################
     <div>완료된 일</div>
    </div>
  );
}

export default App;

const TaskBox = styled.div`
  width: 500px;
  background-color: pink;
  display: flex;
  justify-content: space-between;
`;

const DeleteText = styled.div`
 color: red;
 cursor: pointer;
 `;