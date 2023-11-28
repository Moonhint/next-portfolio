import { useState } from 'react';
import styles from './styles.module.css';
import { Button, Input } from "@nextui-org/react";
import { useGlobalContext } from '@/contexts/GlobalContext';
import Link from 'next/link';
import axios from 'axios';

import useToDo, { ToDoActionKind } from './hooks/useTodo';

const Dashboard = () => {
    const [ text, setText ] = useState('');
    const [ hours, setHours ] = useState('');
    const { todoState, todoDispatch } = useToDo();
    const { namine, setNamine } = useGlobalContext();

    const addTodo = () => {
        const currentTimeStamp = (new Date()).getTime();
        todoDispatch({ type: ToDoActionKind.ADD, payload: { todo: { id: currentTimeStamp, text, hours: parseInt(hours, 10) }}});
        setText('');
        setHours('');
    }

    const removeTodo = (tId: number) => {
        todoDispatch({ type: ToDoActionKind.REMOVE, payload: { tId } })
    }

    const editTodo = (tId: number) => {
        todoDispatch({ type: ToDoActionKind.UPDATE, payload: { tId, todo: { id: tId, text, hours: parseInt(hours, 10) }}});
        setText('');
        setHours('');
    }

    const getFromAPI = async () => {
        const data = await axios.delete('/api/dashboard/12');
        console.log(data);
    }

    const changeNamine = () => {
        setNamine('From Dashboard');
    }

    return (
        <div className={styles.styDashboardContainer}>
            Dashboard
            <div>
                <Link href="/blog">To Blog</Link>
            </div>
            <div>
                <h3>Context: {namine}</h3>
            </div>
            <div>
                {
                    todoState.todos.map(todo => (
                        <div>
                            <p>{todo.text},{todo.hours}</p>
                            <Button color="primary" onClick={() => removeTodo(todo.id)}>
                                Delete
                            </Button>
                            <Button color="primary" onClick={() => editTodo(todo.id)}>
                                Edit
                            </Button>
                        </div>
                    ))
                }
            </div>
            <div>
                <Input type="text" label="Todo" value={text} onValueChange={setText} />
                <Input type="number" label="Hours" value={hours} onValueChange={setHours} />
                <Button color="primary" onClick={addTodo}>
                    Add
                </Button>
            </div>
            <div>
                <Button color="primary" onClick={getFromAPI}>
                    Send Something to API
                </Button>
            </div>
            <div>
                <Button onClick={changeNamine}>Change Namine</Button>
            </div>
        </div>
    )
}

export default Dashboard;
