import React from 'react';


function TodoForm(props) {
    return (
        <div>
            <form onSubmit={props.addTodoHandler}>
                <input type="text" value={props.task} onChange={props.changeHandler} name="task" placeholder="enter what to do..." />
                <button onClick={props.addTodoHandler}>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        </div>
    );
}

export default TodoForm;