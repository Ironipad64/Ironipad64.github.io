import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

const todos = [
  {
    name: 'Wash the car',
    id: 123,
    finished: false
  },
  {
    name: 'Take out the trash',
    id: 124,
    finished: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  handleTodoAdd = (todoName) => {
    const todo = {
      name: todoName,
      id: this.state.todos.length,
      finished: false
    };

    const newTodos = [...this.state.todos, todo];

    this.setState({
      todos: newTodos
    });
  }

  handleTodoCompleted = () => {
    const newTodos = this.state.todos.filter(todo => {
      return (!todo.finished);
    });

    this.setState({
      todos: newTodos
    });
  }

  handleTodoToggle = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            finished: !todo.finished
          }
        }
        return (todo);
      })
    });
  }



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleTodoAdd={this.handleTodoAdd} />
        <TodoList
          todos={this.state.todos}
          handleTodoCompleted={this.handleTodoCompleted}
          handleTodoToggle={this.handleTodoToggle}

        />
      </div>
    );
  }
}

export default App;
