import { Component } from "@angular/core";

// notice decorator fxn to define a Component
@Component({
  selector: "app-root", // this translates to <app-root></app-root>
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})

// this is the ES6 class
export class AppComponent {
  // class fields
  title: string = "My angular-crash-todolist";
  name: string = "Will Cody";
  // name: number = "Will Cody"; // ERROR: Type '"Will Cody"' is not assignable to type 'number'.

  // recall constructor() runs on init
  constructor() {
    console.log(123);
    // this.name = "Red"; // can access class fields
    this.changeName("johnny");
  }

  // class method
  changeName(name: string): void {
    // the void says this fxn doesn't return anything - ts type
    this.name = name;
  }
}
