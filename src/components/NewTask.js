import { Input } from 'antd';
import { useState } from 'react'

export default function NewTask() {
    const [task, setTask] = useState('');


  return (
    <>
      <Input placeholder='Enter task name' />
    </>
  );
}