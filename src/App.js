import React from 'react';

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



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
