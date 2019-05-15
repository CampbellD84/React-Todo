import React from 'react';


function Todo(props) {
   return (
        <div>
            <strong>Task:</strong>{props.todo.task}            
        </div> 
   ); 
}

export default Todo;