import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { HeaderComponent } from './components/core/header/header.component';
import { BreadcrumbsComponent } from './components/core/breadcrumbs/breadcrumbs.component';
import { SearchsectionComponent } from './components/core/page/searchsection/searchsection.component';
import { CourselistComponent } from './components/core/page/courselist/courselist.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SearchsectionComponent,
    CourselistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
