import styles from "./todolist.module.css";
import Todoitem from "./Todoitem";
export default function Todolist({todos,setTodos}){
    return(
        <div className={styles.list}>{todos.map((item)=>(<Todoitem key={item.name} item={item} todos={todos} setTodos={setTodos}/>))} 
                     {/* to display todo list on screen use todoitem component as insert item as a prop use unique key for no error*/}</div>
    )
}