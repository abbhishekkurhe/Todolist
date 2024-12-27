import { useState } from "react";
import styles from "./form.module.css";
export default function Form({todos,setTodos}){
    /*usestate for variable*/
    const [todo,setTodo] = useState({name:"",done:false});
    function handleSubmit(/*accept event [e] */e)
{
  /*prevention code */e.preventDefault();
  /*to add todo to todos to dislplay list */
  setTodos([...todos,todo]);/*... is spread operator used to display a */
  /*to empty box after getting add*/
  setTodo({name:"",done:false});
}
    return(
        <>
          <form className={styles.todoform} /*to change refreshing i.e default behaviour of page use onsubmit and declare function handlesubmit with prevention code*/ onSubmit={handleSubmit}>
                <div className={styles.inputcontainer}><input className={styles.moInput}/*to change value for input use onchange add set value to key pressed */ onChange={(e)=>setTodo({name:e.target.value,done:false})} value={todo.name} type="text"
                placeholder="what to do..?" />
                <button className={styles.button}type="submit">ADD</button></div>
            </form > 
        </>
    )
}