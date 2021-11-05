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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
