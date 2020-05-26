// import ang modules
import { Component, OnInit, Input } from "@angular/core";

// import data models
import { Todo } from "src/app/models/Todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"],
})
export class TodoItemComponent implements OnInit {
  // data fields / props - use the @Input decorator
  @Input() todo: Todo;

  constructor() {}

  ngOnInit() {}

  /* custom methods */
  toggleCompleteTodo(todoItem) {
    // toggle the binary status of the todoItem complete obj prop
    todoItem.completed = !todoItem.completed;
  }

  deleteTodo(todoItem) {
    console.log("delete");
  }

  // set Dyanmic Classes
  setClasses() {
    let classes = {
      todo: true,
      todo__completed: this.todo.completed,
    };
    return classes;
  }
}
