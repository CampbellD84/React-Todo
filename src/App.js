import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import "./app.css";

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
          id: 1234,
          completed: false
        },
        {
          task: "Work on TypeScript",
          id: 1423,
          completed: false
        },
        {
        task: "Complete graph with D3",
        id: 1352,
        completed: false
        },
        {
          task: "Deploy using Next",
          id: 1142,
          completed: false
        }
      ],
      todo: ""
    };
  }
 

  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

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
      <div className="App">
        <div className="form-add">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm 
            addTodoHandler={this.addTodoHandler}
            changeHandler={this.changeHandler}
            value ={this.state.todo}
          />
        </div>
          <TodoList 
            todos={this.state.todos} 
            toggleTodo={this.toggleTodo}
            clearCompleted={this.clearCompleted}
          />
      </div>
    );
  }
}

export default App;
