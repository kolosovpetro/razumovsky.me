import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PdfFolderIndexComponent } from './pages/pdf-folder-index/pdf-folder-index.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ConfigService } from './services/config.service';
import IConfig from './models/interfaces/IConfig';

const initializeAppFactory = (configService: ConfigService): (() => Promise<any>) => {
  return () => {
    return fetch('../../../assets/config/config.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data: IConfig) => {
        configService.setConfig(data);
      });
  };
};

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
    QuotesComponent,
    PageNotFoundComponent,
    PdfFolderIndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [ConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
