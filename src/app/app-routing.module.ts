import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
// change the route to redirect to this page
{
  path: 'cart',
  component: CartComponent
},
// add the home path as default
// to load these route, need to be imported in component.ts 
{
  path: '', redirectTo: 'home', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
