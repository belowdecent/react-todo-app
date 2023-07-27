import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import Todo from "./types/Todo";

function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo(),
    new Todo("Test 2", true),
  ]);

  const handleDelete = (id: number) => {
    const filtered = todos.filter((todo) => todo.id != id);
    setTodos(filtered);
  }

  useEffect(() => {
    console.log("rerendered");
  }, []);

  return (
    <>
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
    </>
  );
}

export default Home;
