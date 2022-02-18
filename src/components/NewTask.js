import { Input } from 'antd';
import { useState } from 'react'

export default function NewTask() {

    const [newTask, setNewTask] = useState('');

    const taskObject = {
        task: newTask,
    }

    const handleButtonSubmit = () => {
        console.log('sending to API')

        fetch('https://much-todo-pl.uc.r.appspot.com/tasks', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
        },
        body: JSON.stringify(taskObject),
        })
        .then()
        .then()
        .catch(err => alert(err))
    }

    const handleInputText = (event) => {
        setNewTask(event.target.value)
    }

    console.log('newTask state here ->>', newTask)

  return (
    <>
    <h2>Add new task</h2>
      <Input 
      placeholder='Enter task name' 
      onChange={event => handleInputText(event) } />
      
      <button onClick={handleButtonSubmit}>Send new task to API</button>
    </>
  );
}