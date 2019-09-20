import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


const routes: Routes = [
{
    path: 'grupo-a',
    component: AppComponent,
    children: [
        {
            path: '',
            loadChildren:'./grupo-a/grupo-a.module#GrupoAModule'
        }
    ]
},
{
  path: 'grupo-b',
  component: AppComponent,
  children: [
      {
          path: '',
          loadChildren:'./grupo-b/grupo-b.module#GrupoBModule'
      }
  ]
},
{
    path: 'shop',
    children: [
        {
            path: '',
            loadChildren:'./shop/shop.module#ShopModule'
        }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
