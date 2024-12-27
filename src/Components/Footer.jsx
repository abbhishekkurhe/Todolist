import styles from "./Footer.module.css";
export default function Footer({done,total}){
    return(
        <div className={styles.foot}>
            <span className={styles.footer}>completed task:{done}</span>
               <span className={styles.footer}>total todos:{total}</span>
        </div>
    )
}