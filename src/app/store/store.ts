import { State, Action, StateContext, Selector } from "@ngxs/store";

import { Todo } from "../models/todo";

import {
  AddTodo,
  GetTodos,
  RemoveTodo,
  ToggleTodo
} from "./actions/todoActions";

export interface TodoStateModel {
  todos: Todo[];
}

@State<TodoStateModel>({
  name: "todos",
  defaults: {
    todos: []
  }
})
export class TodoState {
  @Selector()
  static selectTodos(state: TodoStateModel) {
    return state.todos;
  }

  @Selector()
  static selectCompleted(state: TodoStateModel) {
    return state.todos.filter(t => t.completed == true);
  }

  @Selector()
  static selectUncompleted(state: TodoStateModel) {
    return state.todos.filter(t => t.completed == false);
  }

  @Action(AddTodo)
  addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
    const state = ctx.getState();
    localStorage.setItem(
      "todos",
      JSON.stringify([...state.todos, action.payload])
    );
    ctx.patchState({
      ...state,
      todos: [...state.todos, action.payload]
    });
  }

  @Action(GetTodos)
  getTodos(ctx: StateContext<TodoStateModel>) {
    const state = ctx.getState();
    if (localStorage.getItem("todos")) {
      ctx.patchState({
        ...state,
        todos: [...state.todos, ...JSON.parse(localStorage.getItem("todos"))]
      });
    }
  }

  @Action(RemoveTodo)
  removeTodo(ctx: StateContext<TodoStateModel>, { payload }: RemoveTodo) {
    const state = ctx.getState();
    ctx.patchState({
      todos: state.todos.filter(t => t.id !== payload)
    });
    localStorage.setItem(
      "todos",
      JSON.stringify(state.todos.filter(t => t.id !== payload))
    );
  }

  @Action(ToggleTodo)
  toggleTodo(ctx: StateContext<TodoStateModel>, { payload }: ToggleTodo) {
    const state = ctx.getState();
    const todo = state.todos.find(t => t.id == payload);
    const index = state.todos.indexOf(todo);
    todo.completed = true;

    localStorage.setItem("todos", JSON.stringify(state.todos));
  }
}
