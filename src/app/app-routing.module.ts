import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path:'', component: HomeComponent},
  // {path:'login', component: LoginComponent},
  // {path:'reg', component: RegComponent},
  // {path:'home', component: GallaryComponent},
  // {path:'lf', component: LearningFormComponent},
  // {path:'**', component: ErrCompComponent},
  // ** -> means if the route doesnt exist will route on ErrCompComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
