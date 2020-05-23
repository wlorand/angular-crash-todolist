// Core Imports
import { Component, OnInit } from "@angular/core";

// import Models -- might need to rename this with "model" to tell it aparat from component
import { Todo } from "../../models/Todo";

// Define / Configure the Todos Component
@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
  // create some data
  todos: Todo[];

  constructor() {} // inject services here

  // * ngOnInit as key lifecycle method for an ang9 app
  ngOnInit() {
    // create local temp data -- like component state
    this.todos = [
      { id: 1, title: "Todo One", completed: false },
      { id: 2, title: "Todo Two", completed: true },
      { id: 3, title: "Todo Three", completed: false },
    ];
  }

  ngOnDestroy() {} // cleanup
}
