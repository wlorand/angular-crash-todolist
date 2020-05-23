/**
 * File: app.compomnent.ts  (know every js or jsx file from React is a .ts file)
 * Desc: logic for main app component
 */
import { Component } from "@angular/core";

// notice decorator fxn to define / configure a Component
@Component({
  selector: "app-root", // this translates to using <app-root></app-root>
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})

// this is the ES6 class - Ang7 Components are ES6 Class Componenents
export class AppComponent {
  // class fields -- defined here and can now be used inside {{ }} in the html file
  title: string = "My angular-crash-todolist";
  name: string = "";
  author: string = "Will Cody";
  currentDate: Date = new Date();
  // name: number = "Will Cody"; // ERROR: Type '"Will Cody"' is not assignable to type 'number'.

  // recall constructor() runs on init
  constructor() {
    console.log(123);
    // this.name = "Red"; // can access class fields
    this.changeName("jonathan");
  }

  // class method with ts types set for fxn params
  changeName(name: string): void {
    // the void says this fxn doesn't return anything - ts type (yuck)
    // lots of use of this. in these ang classes
    this.name = name;
  }
}
