import './App.css';
import React, {useEffect, useState} from 'react'
import {TodoList} from "./TodoList";
import {Button} from '@material-ui/core';
import {Context} from './context';

const App = () => {
    const [todos, setTodoList] = useState([]);
    const [todoTitle, setTodoTitle] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        const item = localStorage.getItem('todos') || [];
        setTodoList(JSON.parse(item));
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const getDate = () => {
        const date = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        };
        return date.toLocaleString("ru", options);
    }

    const addTodo = (e) => {
        if (todoTitle !== '') {
            setError("");
            setTodoList([
                ...todos, {
                    id: Date.now(),
                    title: todoTitle,
                    date: getDate(),
                    completed: false
                }
            ]);
            setTodoTitle("");
        } else {
            setError("Пустое поле");
        }
    };
    const removeTodo = (id) => {
        setTodoList(todos.filter(t => {
            return t.id !== id
        }))
    }
    const toggleTodo = id => {
        setTodoList(todos.map(t => {
            if (t.id === id) {
                t.completed = !t.completed
            }
            return t;
        }))
    }
    return (
        <Context.Provider value={{
            removeTodo, toggleTodo
        }}>
            <div className="container">
                <h1>ToDo List</h1>
                <div>
                    <div className="input-field">
                        <input type="text"
                               value={todoTitle}
                               onChange={event => setTodoTitle(event.target.value)}
                        />
                        <label>Задача</label>
                        {error && <div className="error">{error}</div>}
                    </div>
                    <Button onClick={addTodo} variant="contained" color="primary">
                        Добавить
                    </Button>
                </div>
                <TodoList todos={todos}/>
            </div>
        </Context.Provider>
    )
}

export default App;
