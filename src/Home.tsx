import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import createTodo from "./types/Todo";
import { Todo } from "./types/Todo";

function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleDelete = (id: number) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const handleSave = () => {
    localStorage.clear();
    localStorage.setItem(
      "todo-data",
      JSON.stringify({ todoData: todos }),
    );
  };

  const handleReset = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const createTodoData = () => {
      const newTodos = {
        todoData: [
          createTodo({ id: 1 }),
          createTodo({
            name: "Test2",
            complete: true,
            id: 2,
          }),
        ],
      };

      localStorage.clear();
      localStorage.setItem(
        "todo-data",
        JSON.stringify({ data }),
      );

      return newTodos;
    };

    let data: { todoData: Todo[] };
    let storageData = localStorage.getItem("todo-data");

    if (storageData == null) {
      data = createTodoData();
    } else {
      data = JSON.parse(storageData);
      if (data.todoData == null) {
        data = createTodoData();
      }
    }

    setTodos(data.todoData);
  }, []);

  return (
    <div>
      <TodoList
        todos={todos.filter((todo) => !todo.complete)}
        title="To do:"
        handleDelete={handleDelete}
      />
      <TodoList
        todos={todos.filter((todo) => todo.complete)}
        title="Completed:"
        handleDelete={handleDelete}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Home;
