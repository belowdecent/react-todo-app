class Todo {
  private static msInWeek: number = 6048000000;
  private static idCounter: number = 0;

  public static dateFormatter: Intl.DateTimeFormat =
    new Intl.DateTimeFormat("ru-RU", {
      dateStyle: "short",
      timeStyle: "short",
    });

  constructor(
    public name: string = "Test",
    public complete: boolean = false,
    public createdOn: Date = new Date(Date.now()),
    public dueTo: Date = new Date(
      Date.now() + Todo.msInWeek,
    ),
    public id: number = Todo.idCounter,
  ) {
    Todo.idCounter += 1;
  }
}

export default Todo;
