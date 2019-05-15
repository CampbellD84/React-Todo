import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';


const todoTasks = [
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
];

const defaultTask = {
  tasks: todoTasks,
  task: "",
  id: Date.now(),
  completed: false
};

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = defaultTask;
  }
 
  changeHandler = event => {
    console.log(event.target.value);
    this.setState({[event.target.task]: event.target.value});
  }

  addTodoHandler = event => {
    event.preventDefault();
    let newTask = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
    this.setState({});
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {this.state.tasks.map(task => (
            <Todo task={task}/>
          ))}
            <TodoForm 
            addTodoHandler={this.addTodoHandler}
            changeHandler={this.changeHandler}
            task ={this.state.task}
            id={this.state.id}
            completed={this.state.completed}
            />
      </div>
    );
  }
}

export default App;
