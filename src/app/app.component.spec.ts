// Common testing imports
import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

// local component import (for what you are testing!)
import { AppComponent } from "./app.component";

// same describe
describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  // same it syntax + followed by assertions - here expect()
  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy(); // Jest assertion ?
  });

  it(`should have as title 'angular-crash-todolist'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("angular-crash-todolist");
  });

  it("should render title in a h2 tag", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h2").textContent).toContain(
      "Welcome to My angular-crash-todolist!"
    );
  });
});
