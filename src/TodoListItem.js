import React, {useState} from 'react'

export const TodoListItem = (props) => {
    const [checked , setChecked] = useState(props.completed);
    const cln = ['todo'];
    if(checked){
        cln.push('completed');
    }
    return (
        <li className={cln.join(' ')}>
            <label>
                <input type="checkbox"
                       checked={checked}
                       onChange={() => setChecked(!checked)}
                />
                <span>{props.title}</span>
                <i className="material-icons red-text">delete_forever</i>
            </label>
        </li>
    )
}
