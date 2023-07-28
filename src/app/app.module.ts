import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MathComponent } from './components/math/math.component';
import { OeisComponent } from './components/oeis/oeis.component';
import { LinksComponent } from './components/links/links.component';
import { QuotesComponent } from './components/quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    NavbarComponent,
    MainPageComponent,
    ProjectsComponent,
    MathComponent,
    OeisComponent,
    LinksComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
