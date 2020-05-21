// Core Imports
import { Component, OnInit } from "@angular/core";

// Define / Configure the Todos Component
@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
  // create some data
  // todos: Todo[];

  constructor() {} // services here
  ngOnInit() {} // init lifecycle method stuff here

  ngOnDestroy() {} // cleanup
}
