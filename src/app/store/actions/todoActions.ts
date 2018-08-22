import { Todo } from "../../models/todo";

export class AddTodo {
  static readonly type = "[Todo] Add";

  constructor(public payload: Todo) {}
}

export class GetTodos {
  static readonly type = "[Todo] Get";
}

export class RemoveTodo {
  static readonly type = "[Todo] Remove";

  constructor(public payload: String) {}
}

export class ToggleTodo {
  static readonly type = "[Todo] Toggle";

  constructor(public payload: String) {}
}
