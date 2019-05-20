import React from 'react';


function TodoForm(props) {
    return (
        <div>
            <form>
                <input type="text" 
                value={props.value} 
                onChange={props.changeHandler} 
                name="todo"  
                />
                <br/>
                <button className="button" onClick={props.addTodoHandler}>Add Todo</button>
            </form>
        </div>
    );
}

export default TodoForm;