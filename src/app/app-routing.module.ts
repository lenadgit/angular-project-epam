import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageviewComponent } from './components/core/page/pageview/pageview.component';
import { CourseviewComponent } from './components/core/coursepage/courseview/courseview.component';


const routes: Routes = [
  { path: '', component: PageviewComponent },
  { path: 'courses/new-page', component: CourseviewComponent },
  { path: 'courses/:id', component: CourseviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
