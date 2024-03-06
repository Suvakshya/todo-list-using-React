import Todoitem from "./Todoitem";
import styles from "./Todoitems.module.css";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itmesContainer}>
      {todoItems.map((item) => (
        <Todoitem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};
export default TodoItems;
