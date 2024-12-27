import styles from "./todoitem.module.css";
export default function Todoitem({item,todos,setTodos}){
    function handleDelete(item){
        console.log("deleted item",item)
        setTodos( todos.filter((todo)=>todo!==item));
    }
   function click(name){
   const newArray= todos.map((todo)=>todo.name=== name?{...todo,done:!todo.done}:todo);
   setTodos(newArray)

   }
   const completed = item.done? styles.completed:""
    return(
        <div className={styles.item}>
     <div className={styles.itemname}>
        <span className={completed} onClick={()=>click(item.name)}> {item.name}
        </span>
        <span>
            <button onClick={()=>handleDelete(item)} className={styles.delete}>❌</button>
        </span>
        <hr className={styles.line}/></div>
        </div>
    )
}