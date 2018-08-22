export class Todo {
  public description: String;
  public completed: Boolean;
  public id: String;

  constructor(description, completed, id) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }
}
