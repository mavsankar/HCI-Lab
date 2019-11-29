import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"courses",component:CoursesComponent},
  {path:"courses/:target",component:CourseComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
