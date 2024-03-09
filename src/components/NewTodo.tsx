import { useContext, useRef } from "react";
import { TodoContext } from "../store/todo-context";
import style from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoCxt = useContext(TodoContext);
  const todoInputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredValue = todoInputRef.current!.value;

    if (enteredValue.trim().length === 0) {
      return;
    }
    todoCxt.onAdd(enteredValue);
  };

  return (
    <form onSubmit={handleFormSubmit} className={style.newTodo}>
      <label htmlFor="todo">New Todo</label>
      <input type="text" ref={todoInputRef} />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
