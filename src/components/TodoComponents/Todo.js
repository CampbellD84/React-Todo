import React from 'react';


function Todo(props) {
   return (
        <div className={`item${props.todo.completed ? " completed" : ""}`}
        onClick={() => props.toggleTodo(props.todo.id)}>
            <p>{props.todo.task}</p>
        </div> 
   ); 
}

export default Todo;