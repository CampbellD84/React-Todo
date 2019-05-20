// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            <form className="clear">
                <button className="btn-clear button" onClick={e => {props.clearCompleted(e);}}>
                        Clear Completed
                </button>
            </form>
            {props.todos.map(todo => (
                <Todo 
                key={todo.id}
                todo={todo}
                toggleTodo={props.toggleTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;