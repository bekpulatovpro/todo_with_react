import React from "react"
import "./todo.css"



function Todo({children,todo,handleDelete,handleCheck}){

    return <li  className="li" style={{textDecoration:todo.isCompleted ? "line-through" : "none"}}>
        <div>
        <input type='checkbox' data-todo-id={todo.id} onClick={handleCheck} defaultChecked={todo.isCompleted}/>
        <span className="todo__sp">{children}</span>
        </div>

        <button className="btn__li" data-todo-id={todo.id} type="submit"onClick={handleDelete}>&times;</button>
    </li>



}

export default Todo;