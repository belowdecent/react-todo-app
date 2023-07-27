import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import createTodo from "./types/Todo";
import { Todo } from "./types/Todo";

function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleDelete = (id: number) => {
    const filtered = todos.filter((todo) => todo.id != id);
    setTodos(filtered);
  }

  useEffect(() => {
    const setData = () => {
      let data: { todoData: Todo[] };
      let storageData = localStorage.getItem('todo-data');

      if (storageData == null) {
        data = { 
          todoData: [
            createTodo({ id: 1 }),
            createTodo({ name: "Test2", complete: true, id: 2}),
          ],
        };

        localStorage.setItem(
          'todo-data', 
          JSON.stringify({ data })
        );
        console.log("Items were set");
        setTodos(data.todoData)
      } else {
        console.log("set todos from data");
        data = JSON.parse(storageData);
        console.log(data);
        setTodos(data.todoData);
      }
    };
    console.log("rerendered");
    setData();
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
    </div>
  );
}

export default Home;
