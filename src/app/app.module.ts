// main module import
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// routing
import { AppRoutingModule } from "./app-routing.module";

// local component imports
import { AppComponent } from "./app.component";
import { TodosComponent } from "./components/todos/todos.component";

// define the main module
@NgModule({
  // in declarations [], list all app components here -- Todos got auto added from ng generate
  declarations: [AppComponent, TodosComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [], // services for our module
  bootstrap: [AppComponent], // init de components on start
})
export class AppModule {}
