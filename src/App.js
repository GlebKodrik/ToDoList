import React, {useEffect, useReducer, useState} from 'react'
import {TodoList} from "./TodoList";
import {Button} from '@material-ui/core';
import {Context} from './context';
import appReducer from "./redux";

const App = () => {
    const [state, dispatch] = useReducer(appReducer, JSON.parse(localStorage.getItem('todos')) || []);
    const [todoTitle, setTodoTitle] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state));
    }, [state])
    const todo = [...state].reverse();
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
    const addTodo = () => {
        if (todoTitle !== '') {
            setError("");
            dispatch({
                type: 'add',
                payload: {title:todoTitle,date: getDate()}
            });
            setTodoTitle("");
        } else {
            setError("Пустое поле");
        }
    };

    return (
        <Context.Provider value={{
            dispatch
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
                <TodoList todos={todo}/>
            </div>
        </Context.Provider>
    )
}

export default App;
