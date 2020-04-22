import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientListComponent} from './components/client-list/client-list.component'
import {ClientInComponent} from './components/client-in/client-in.component'
import {ClientPrevComponent} from './components/client-prev/client-prev.component'

const routes: Routes = [
  {
    path: 'clients/list',
    component: ClientListComponent
  },
  {
    path: 'clients',
    component: ClientInComponent
  },
  {
    path: 'clients/:id',
    component: ClientPrevComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
