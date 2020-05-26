// Core Imports
import { Component, OnInit } from "@angular/core";

// import Models -- might need to rename this with "model" to tell it aparat from component
import { Todo } from "../../models/Todo";

// import Services
import { FetchTodoService } from "../../services/fetch-todo.service";

// Define / Configure the Todos Component
@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
  // create some data
  todos: Todo[];

  constructor(private fetchTodoService: FetchTodoService) {} // inject services here

  // * ngOnInit as key lifecycle method for an ang9 app
  ngOnInit() {
    // // OLD: create local temp data -- like component state
    // this.todos = [
    //   { id: 1, title: "Todo One", completed: false },
    //   { id: 2, title: "Todo Two", completed: true },
    //   { id: 3, title: "Todo Three", completed: false },
    // ];

    // fetch todo data from the service
    // v2: when using rxjs observables, you need to .subscribe()
    // and take the todos [] that it returns and assign it to this class , i.e. this.todos
    this.fetchTodoService.getTodos().subscribe((todos) => (this.todos = todos));

    // v1 : simple assignment works with hard-coded data
    // this.todos = this.fetchTodoService.getTodos();
  }

  ngOnDestroy() {} // cleanup
}
