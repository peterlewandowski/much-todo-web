import { useState, useEffect } from 'react';
import { List, Checkbox } from 'antd'

export default function Task ({ item, setTasks }) {
    const [itemStyle, setItemStyle] = useState({})
    useEffect(() => {
        if(item.done) {
            setItemStyle({ color: 'grey', textDecoration: 'line-through' });
        } else {
            setItemStyle({ color: 'black', textDecoration: 'none'});
        }
    }, [item])
    const handleToggleTaskDone = () => {
        fetch(`https://much-todo-pl.uc.r.appspot.com/tasks/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ isDone: !item.done })
        })
            .then(() => {
                fetch('https://much-todo-pl.uc.r.appspot.com/tasks')
                    .then((response) => response.json())
                    .then((data) => setTasks(data));
            })
            .catch(alert)
    };

    return (
      <>
        <List.Item style={itemStyle}>
        <Checkbox style={{margin: "10px"}} onClick={handleToggleTaskDone} checked={item.done}></Checkbox>{item.task}
        </List.Item>
      </>
    );
}