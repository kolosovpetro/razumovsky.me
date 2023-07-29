import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksComponent } from './components/links/links.component';
import { MathComponent } from './components/math/math.component';
import { OeisComponent } from './components/oeis/oeis.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '', component: MainPageComponent,
    children: [
      { path: '', component: ProjectsComponent},
      { path: 'math', component: MathComponent },
      { path: 'oeis', component: OeisComponent },
      { path: 'links', component: LinksComponent },
      { path: 'quotes', component: QuotesComponent },
      { path: '**', component: PageNotFoundComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
