
import { useState } from "react";
import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./footer";
export default function Todo(){
     /*another state to sotre all todos and display */
const [todos,setTodos] = useState([]);
const done = todos.filter((todo)=>todo.done).length
const total=todos.length
return(
        <div>
         <Form todos={todos} setTodos={setTodos}/>
            <Todolist todos={todos} setTodos={setTodos}/>
            <Footer done={done} total={total}/>
        </div>
    );
}
