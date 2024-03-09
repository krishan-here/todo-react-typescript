import React, { useState } from "react";
import Todo from "../models/Todo";

type TodoContext = {
  todos: Todo[];
  onAdd: (todoText: string) => void;
  onRemove: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContext>({
  todos: [],
  onAdd: (todoText: string) => {},
  onRemove: (id: string) => {},
});

const TodoContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const handleRemoveTodo = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== todoId);
    });
  };

  const todoContext: TodoContext = {
    todos,
    onAdd: handleAddTodo,
    onRemove: handleRemoveTodo,
  };
  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
