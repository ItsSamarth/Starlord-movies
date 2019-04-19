import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PaginatorComponent } from "./movie/paginator/paginator.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "paginate", component: PaginatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
