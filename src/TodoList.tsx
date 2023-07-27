import Todo from "./types/Todo";

function TodoList({
  todos,
  title,
  handleDelete
}: {
  todos: Todo[];
  title: string;
  handleDelete: (id: number) => void
}) {
  return (
    <>
      <h1>{title}</h1>
      <div className="todo-list">
        {todos.map((todo) => {
          return (
            <div className="todo-preview" key={todo.id}>
              <h2>{todo.name}</h2>
              <br />
              <span className="created-on">
                Created:{" "}
                {Todo.dateFormatter.format(todo.createdOn)}
              </span>
              <br />
              <span className="due-to">
                Due to:{" "}
                {Todo.dateFormatter.format(todo.dueTo)}
              </span>
              <button
                onClick={() => handleDelete(todo.id)}
              >
                Delete this
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TodoList;
