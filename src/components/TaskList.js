import { useState, useEffect } from "react";
import { List, Checkbox } from "antd";
import Task from "./Task";

// const fakeTasks = [
//     { id: 1, task: 'Buy Beer', done: false },
//     { id: 2, task: 'Buy Trulys', done: true },
//     { id: 3, task: 'Buy Milk', done: false },
//     { id: 4, task: 'Buy Wine', done: true },
//     { id: 5, task: 'Buy Paper Towels', done: false },
// ]

export default function TaskList({ tasks, setTasks }) {
  useEffect(() => {
    // Get the data from the API
    fetch("https://much-todo-pl.uc.r.appspot.com/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch(alert);
  }, []);

  // tasks has all the data

  // we need to pass this TASKS => data to the list component
  return (
    <List
      dataSource={tasks}
      size="large"
      bordered
      renderItem={(item) => (
          <Task item={item} setTasks={setTasks} />
      )} // importing {item} from Task
    />
  );
}

//   return (
//     <>
//       <ul>
//         {tasks?.map((singleTask) => {
//           return <li key={singleTask.id}>{singleTask.task}</li>;
//         })}
//       </ul>
//     </>
//   );
// }