import React from 'react'
import {TodoListItem} from "./TodoListItem";
export const TodoList = ({todos}) => {
    return (
        <ul>
            {todos.map(item => <TodoListItem key={item.id} {...item}/>)}
        </ul>
    )
}
