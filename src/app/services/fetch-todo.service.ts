// import ang modules
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// import rxjs extensions
import { Observable } from "rxjs";

// import data models
import { Todo } from "src/app/models/Todo";

@Injectable({
  providedIn: "root",
})
export class FetchTodoService {
  constructor(private http: HttpClient) {}

  // class properties
  todosUrl: string = "https://jsonplaceholder.typicode.com/todos";
  todosLimit: string = "?_limit=5";

  getTodos(): Observable<Todo[]> {
    // v2: use http to get todos from the JSON Placeholder API
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);

    // // v1: return the hard-coded todos [] of {}
    // return [
    //   { id: 1, title: "Do X", completed: true },
    //   { id: 2, title: "Do Y", completed: false },
    //   { id: 3, title: "Do Z", completed: false },
    // ];
  }
}
