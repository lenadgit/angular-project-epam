import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { HeaderComponent } from './components/core/header/header.component';
import { BreadcrumbsComponent } from './components/core/breadcrumbs/breadcrumbs.component';
import { SearchsectionComponent } from './components/core/page/searchsection/searchsection.component';
import { CourselistComponent } from './components/core/page/courselist/courselist.component';
import { CoursedateDirective } from './directives/coursedate.directive';
import { AuthserviceService } from './services/auth/authservice.service';
import { SigninComponent } from './components/core/auth/signin/signin.component';
import { CoursecontentComponent } from './components/core/coursepage/coursecontent/coursecontent.component';
import { CoursedateComponent } from './components/core/coursepage/coursedate/coursedate.component';
import { CoursedurationComponent } from './components/core/coursepage/courseduration/courseduration.component';
import { CourseauthorsComponent } from './components/core/coursepage/courseauthors/courseauthors.component';
import { CoursesaveComponent } from './components/core/coursepage/coursesave/coursesave.component';
import { CourseviewComponent } from './components/core/coursepage/courseview/courseview.component';
import { PageviewComponent } from './components/core/page/pageview/pageview.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SearchsectionComponent,
    CourselistComponent,
    CoursedateDirective,
    SigninComponent,
    CoursecontentComponent,
    CoursedateComponent,
    CoursedurationComponent,
    CourseauthorsComponent,
    CoursesaveComponent,
    CourseviewComponent,
    PageviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
