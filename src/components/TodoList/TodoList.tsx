import { ITodoItem } from "../../Interfaces";

import style from "./TodoList.module.scss";

interface ITodoListData {
  todoList: ITodoItem[];
}

const TodoList = (props: ITodoListData) => {
  const { todoList } = props;

  return (
    <ul className={style.todo_list}>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
