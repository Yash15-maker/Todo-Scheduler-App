import React from 'react'
import { TodoItem } from "./TodoItem"
export const Todos = (props) => {
   
    return (
        <div className="container" style={{minHeight: "40vh", margin: "1rem auto"}}>
            <h3 className=" my-3">Todos List</h3>
            {props.todos.length===0?"No todos to display. Jaake bnao phir aao :) ":
            props.todos.map((todo) => 
            { return <TodoItem todo={todo} key={todo.sno}
            onDelete={props.onDelete} /> })}
        </div>
    )
}