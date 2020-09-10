// imports
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = []; // notice ts + routes as array (empty to start)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

// every module hgas a class, incl the router one
export class AppRoutingModule {}
