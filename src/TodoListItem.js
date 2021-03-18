import React, {useContext} from 'react'
import s from './TodoList.module.css'
import {Context} from './context';

export const TodoListItem = (props) => {
    const {dispatch} = useContext(Context);
    const cln = ['todo'];
    if (props.completed) {
        cln.push('completed');
    }
    return (
        <li className={cln.join(' ')}>
            <label>
                <input type="checkbox"
                       checked={props.completed}
                       onChange={() => dispatch({type: 'toggleTodo', payload: props.id})}
                />
                <span>{props.title}</span>
                <div className={s.dateDeleteWrap}>
                    <span>{props.date}</span>
                    <i className="material-icons red-text"
                       onClick={() => dispatch({type: 'removeTodo', payload: props.id})}>delete_forever</i>
            </div>
        </label>
</li>
)
}
