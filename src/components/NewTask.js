import { Input } from 'antd';
import { useState } from 'react'

export default function NewTask() {
    const [newTask, setTask] = useState('');

    const taskObject = {
        task: 'Buy Milk',
        done: false
    }

  return (
    <>
      <Input placeholder='Enter task name' 
      onChange={event => console.log(event.target.value)} />
    </>
  );
}