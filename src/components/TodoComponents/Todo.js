import React from 'react';


function Todo(props) {
   return (
    <div>
        <p>
            <strong>Task:</strong>{props.task.task}
        </p>
        <p>
            <strong>ID:</strong>{props.task.id}
        </p>
        <p>
            <strong>Completed:</strong>{props.task.completed}
        </p>

    </div>
   ); 
}

export default Todo;