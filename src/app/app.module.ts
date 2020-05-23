/**
 * File: app.module.ts
 * Desc: Make an Angular Module - the main one
 */

// import other modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// import routing
import { AppRoutingModule } from "./app-routing.module";

// local component imports
import { AppComponent } from "./app.component";
import { TodosComponent } from "./components/todos/todos.component";
import { TodoItemComponent } from './components/todo-item/todo-item.component';

// define / config the main module with a @Decorator
@NgModule({
  declarations: [AppComponent, TodosComponent, TodoItemComponent], // declare components
  imports: [BrowserModule, AppRoutingModule], // declare imports
  providers: [], // declare services for your module
  bootstrap: [AppComponent], // Boot-Up Selective Components
})

// 2- Create an ES6 Class for your Module
export class AppModule {}
