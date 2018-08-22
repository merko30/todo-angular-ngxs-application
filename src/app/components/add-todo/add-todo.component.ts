import { Component, OnInit } from "@angular/core";

import { Select, Store } from "@ngxs/store";

import { v1 } from "uuid";

import { AddTodo } from "../../store/actions/todoActions";

//import { TodoService } from '../todo.service';

@Component({
  selector: "add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.css"]
})
export class AddTodoComponent implements OnInit {
  private description: String;
  private message: String;

  constructor(private store: Store) {
    this.description = "";
  }

  ngOnInit() {}

  add() {
    if (this.description !== "") {
      this.message = "";
      let todo = { description: this.description, completed: false, id: v1() };
      this.store.dispatch(new AddTodo(todo));
    } else {
      this.message = "Can't be blank";
    }
    this.description = "";
  }
}
