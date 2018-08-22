import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Todo } from "../../models/todo";

import { Store } from "@ngxs/store";

import {
  faWindowClose,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

import { ToggleTodo, RemoveTodo } from "../../store/actions/todoActions";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  @Input()
  todo: Todo;
  faCheckCircle = faCheckCircle;
  faWindowClose = faWindowClose;

  constructor(private store: Store) {}

  ngOnInit() {}

  removeTodo(id) {
    this.store.dispatch(new RemoveTodo(id));
  }

  complete(id) {
    this.store.dispatch(new ToggleTodo(id));
  }
}
