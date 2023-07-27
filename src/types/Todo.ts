const msInWeek: number = 6048000000;

interface Todo {
  name: string;
  complete: boolean;
  createdOn: string;
  dueTo: string;
  id: number;
}

function createTodo({
  name = "Test",
  complete = false,
  createdOn = new Date(Date.now()),
  dueTo = new Date(Date.now() + msInWeek),
  id,
}: {
  name?: string,
  complete?: boolean,
  createdOn?: Date
  dueTo?: Date,
  id: number
}) {
  return {
    name,
    complete,
    createdOn: createdOn.toISOString(),
    dueTo: dueTo.toISOString(),
    id
  }
}

export default createTodo;
export type { Todo }; 
