import React from 'react';


const Todo = props => {

    const handleClick = () => {
        props.handleTodoToggle(props.todo.id);
    }

    return (
        <div onClick={handleClick} className={`todos${props.todo.finished ? 'finished' : ''}`}>
            <p>{props.todo.name}</p>
        </div>
    )


};

export default Todo;