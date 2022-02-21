import { Input } from "antd";
import { useState } from "react";

export default function NewTask( {setTasks }) {
  const [newTask, setNewTask] = useState("");

  
  const handleButtonSubmit = () => {
    if(newTask.trim() === '') {
      return                            // don't do anything
    }
    const taskObject = {
      task: newTask,
    };
    console.log("sending to API");

    fetch("https://much-todo-pl.uc.r.appspot.com/tasks", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(taskObject), // '{"task":"whatever"}
    })
      .then(() => {
        setNewTask('')
        // cool, we added a new task, now let's update the list
        fetch('https://much-todo-pl.uc.r.appspot.com/tasks')
          .then(response => response.json())
          .then(data => setTasks(data))
        })
      .catch((err) => alert(err));
  }
  const handleInputText = (event) => {
    setNewTask(event.target.value);
  };

  // const handleInputText = ({target}) => setNewTask(target.value) // the above lines can be written with object destructuring

  return (
      <Input.Search
        value={newTask}
        placeholder="Enter task name"
        enterButton="Add Task"
        size="large"
        onSearch={handleButtonSubmit}
        onChange={handleInputText} />
  );
}
