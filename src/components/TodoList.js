// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"

import Todo from "./Todo"

const TodoList = props => {

    const handleClick = () => {
        props.handleTodoCompleted();
    }

    return (
        <div>
            {props.todos.map(todo => (
                <Todo handleTodoToggle={props.handleTodoToggle} key={todo.id} todo={todo} />
            ))}
            <button onClick={handleClick} className="clear-btn">
                Clear To Do's
            </button>
        </div>
    );
};

export default TodoList;




// import React from 'react';

// class TodoList extends React.Component {
//     constructor() {
//         super(props);

//     }

//     handleClick = (props) => [
//         props.handleItemCompleted();
//     ]

//     render() {
//         return (
//             <div>
//                 {props.todos.map(item => (
//                     <Todo handleItemToggle={props.handleItemToggle} key={item.id} item={item} />
//                 ))}
//                 <button onClick={handleClick} className="clear-btn" >
//                     Clear dat bois
//             </button>
//             </div>
//         )
//     }
// }

// export default TodoList;
