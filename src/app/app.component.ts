import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Todo } from "./models/todo";
import { Observable } from "rxjs";

import { GetTodos, RemoveTodo, ToggleTodo } from "./store/actions/todoActions";
import { TodoState } from "./store/store";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: String = "Todo Application";

  current: String = "all";

  @Select(TodoState.selectTodos)
  todos$: Observable<Todo[]>;
  @Select(TodoState.selectCompleted)
  completed$: Observable<Todo[]>;
  @Select(TodoState.selectUncompleted)
  uncompleted$: Observable<Todo[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetTodos());
    // this.todos = this.todoService.getTodos();
  }

  changeVisible(current) {
    this.current = current;
  }
}
