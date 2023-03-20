import { useState } from "react";

import { ITodoItem } from "../../Interfaces";

import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const AppBody = () => {
  const [todoList, setTodoList] = useState<ITodoItem[]>([
    { id: 1, completed: false, text: "my first todo item!" },
  ]);
  const [newTodoText, setNewTodoText] = useState<string | undefined>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main>
      <div>todo categories</div>
      {newTodoText}
      <TodoForm
        newTodoText={newTodoText}
        setNewTodoText={setNewTodoText}
        handleSubmit={handleSubmit}
      />
      <TodoList todoList={todoList} />
    </main>
  );
};

export default AppBody;
