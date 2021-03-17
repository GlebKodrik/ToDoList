import React from 'react'

export const TodoListItem = (props) => {
    return (
        <li className="todo">
            <label>
                <input type="checkbox" defaultChecked={false}/>
                <span>{props.title}</span>
                <i className="material-icons red-text">delete_forever</i>
            </label>
        </li>
    )
}
