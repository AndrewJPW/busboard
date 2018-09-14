import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { BusstopComponent } from './busstop/busstop.component';
import { BusStopListComponent } from './bus-stop-list/bus-stop-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/stops', pathMatch: 'full'},
  {path: 'stops', component: BusStopListComponent},
  {path: 'stop/:id', component: BusstopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
