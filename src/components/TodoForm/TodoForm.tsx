import { Button, TextField } from "@mui/material";
import style from "./TodoForm.module.scss";

interface ITodoFormData {
  newTodoText: string | undefined;
  setNewTodoText: React.Dispatch<React.SetStateAction<string | undefined>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TodoForm = (props: ITodoFormData) => {
  const { newTodoText, setNewTodoText, handleSubmit } = props;
  return (
    <form className={style.todo_form} onSubmit={handleSubmit}>
      <TextField
        placeholder="add todo item"
        type="text"
        className={style.todo_form_input}
        value={newTodoText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodoText(e.target.value)
        }
      />
      <Button
        variant="contained"
        className={style.todo_form_button}
        type="submit"
      >
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
