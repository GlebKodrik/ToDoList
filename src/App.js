import './App.css';
import React, {useState} from 'react'
import {TodoList} from "./TodoList";
import {Button} from '@material-ui/core';
import s from './TodoList.moduls.css'

const App = () => {
    const [todos, setTodoList] = useState([]);
    const [todoTitle, setTodoTitle] = useState("");
    const [error, setError] = useState("");
    const addTodo = () => {
        if(todoTitle !== ''){
            setError("");
            setTodoList([
                ...todos, {
                    id: Date.now(),
                    title: todoTitle,
                    completed: false
                }
            ]);
            setTodoTitle("");
        }else {
            setError("Пустое поле");
        }
    };

    return (
        <div className="container">
            <h1>ToDo List</h1>
            <div className="input-field">
                <input type="text"
                       value={todoTitle}
                       onChange={event => setTodoTitle(event.target.value)}
                />
                <label>Задача</label>
                <Button onClick={addTodo} variant="contained" color="primary">
                    Primary
                </Button>
                {error && <div className="error">{error}</div>}
            </div>
            <TodoList todos={todos}/>
        </div>
    )
}

export default App;
