import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      
      todos: [
        {
          task: "Learn Webpack",
          id: Date.now(),
          completed: false
        },
        {
          task: "Work on TypeScript",
          id: Date.now(),
          completed: false
        },
        {
        task: "Complete graph with D3",
        id: Date.now(),
        completed: false
        },
        {
          task: "Deploy using Next",
          id: Date.now(),
          completed: false
        }
      ],
      todo: ""
    };
  }
 
  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  addTodoHandler = event => {
    event.preventDefault();
    const newTask = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask],
      todo: ""
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
          <TodoList todos={this.state.todos} />
            <TodoForm 
            addTodoHandler={this.addTodoHandler}
            changeHandler={this.changeHandler}
            value ={this.state.todo}
            />
      </div>
    );
  }
}

export default App;
