import React from 'react';


function TodoForm(props) {
    return (
        <div>
            <form>
                <input type="text" 
                value={props.value} 
                onChange={props.changeHandler} 
                name="todo" 
                placeholder="enter what to do..." 
                />
                <button onClick={props.addTodoHandler}>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        </div>
    );
}

export default TodoForm;