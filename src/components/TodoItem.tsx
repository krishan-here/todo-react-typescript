import style from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onRemove: () => void }> = (props) => {
  const handleRemoveTodo = () => {
    props.onRemove();
  };
  return (
    <li className={style.todoItem} onClick={handleRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
