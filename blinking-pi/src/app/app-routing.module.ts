import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';
import { DetailComponent } from 'app/detail/detail.component';

const routes: Routes = [
  {
    path: '', // wenn der Pfad leer ist (also lediglich http://localhost:4200)...
    pathMatch: 'full', // ...und zwar komplett...
    redirectTo: 'leds' // ...dann navigiere zu...
  },
  {
    path: 'leds',
    component: DashboardComponent
  },
  {
    path: 'leds/:index', // Doppelpunkt bedeutet, hier kommt eine Variable.
    component: DetailComponent
  },
  {
    path: '**', // wenn der Pfad irgendwas ab http://localhost:4200 ist...
    component: PageNotFoundComponent // dann navigiere zu...
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
