import './App.css';
import React, {Component} from 'react'
import {TodoList} from "./TodoList";

class App extends Component {
    state = {
        todos: [
            {id: 1, title: "Выполнить первую задачу", completed: false},
            {id: 2, title: "Погладить васю", completed: false},
            {id: 3, title: "Рассказать историю", completed: false},
            {id: 4, title: "Разгрузить коробки", completed: false},
        ]
    }

    render() {
        return (
            <div className="container">
                <h1>ToDo List</h1>
                <div className="input-field">
                    <input type="text"/>
                    <label>Todo name</label>
                </div>
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
}

export default App;
