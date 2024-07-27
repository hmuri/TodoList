import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [tasks, setTasks] = useState([
    { name: "Play", completed: false },
    { name: "Sleep", completed: true },
    { name: "Code", completed: false },
  ]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input) {
      setTasks([...tasks, { name: input, completed: false }]);
      setInput("");
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completionRate =
    (tasks.filter((task) => task.completed).length / tasks.length) * 100;

  return (
    <Container>
      <h1>To Do List</h1>
      <FormContainer>
        <Input type="text" value={input} onChange={handleChange} />
        <Button onClick={handleAddTask}>Add</Button>
      </FormContainer>
      <HeaderText>Do</HeaderText>
      <div>
        {tasks.map(
          (task, index) =>
            !task.completed && (
              <TaskBox key={index} completed={task.completed}>
                <div>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleComplete(index)}
                  />
                  {task.name}
                </div>
                <DeleteText onClick={() => handleDelete(index)}>
                  Delete
                </DeleteText>
              </TaskBox>
            )
        )}
        <HeaderText>Done</HeaderText>
        {tasks.map(
          (task, index) =>
            task.completed && (
              <TaskBox key={index} completed={task.completed}>
                <div>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleComplete(index)}
                  />
                  {task.name}
                </div>
                <DeleteText onClick={() => handleDelete(index)}>
                  Delete
                </DeleteText>
              </TaskBox>
            )
        )}
      </div>
      <HeaderText>Progress</HeaderText>
      <div>
        <ProgressBarContainer>
          <ProgressBar width={completionRate}>
            {`${Math.round(completionRate)}%`}
          </ProgressBar>
        </ProgressBarContainer>
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 300px;
  background-color: #f9f7f7;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
`;

const Input = styled.input`
  box-sizing: border-box;
  height: 100%;

  flex-grow: 1;

  margin-right: 10px;
`;

const Button = styled.button`
  box-sizing: border-box;
  height: 100%;

  cursor: pointer;
`;

const TaskBox = styled.div`
  width: 100%;
  background-color: ${(props) => (props.completed ? "#F0F0F0" : "#D6EFD8")};
  display: flex;
  justify-content: space-between;

  box-sizing: border-box;
  padding: 5px;
  margin: 5px 0;

  border-radius: 5px;
`;

const DeleteText = styled.div`
  color: red;
  cursor: pointer;
`;

const HeaderText = styled.div`
  padding: 5px;
  font-weight: bold;
  margin: 5px 0;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 5px;
  height: 24px;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #9cdba6;
  width: ${(props) => props.width}%;
  border-radius: 5px;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  visibility: ${(props) => (props.width > 0 ? "visible" : "hidden")};
`;
