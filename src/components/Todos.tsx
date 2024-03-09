import { useContext } from "react";
import { TodoContext } from "../store/todo-context";
import TodoItem from "./TodoItem";
import style from "./Todos.module.css";

const Todos: React.FC = () => {
  const todoCxt = useContext(TodoContext);

  return (
    <ul className={style.todos}>
      {todoCxt.todos.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemove={todoCxt.onRemove.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
