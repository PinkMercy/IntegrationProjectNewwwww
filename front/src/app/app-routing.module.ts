import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layouts/layout.component';
import { CyptolandingComponent } from './cyptolanding/cyptolanding.component';
import { Page404Component } from './extrapages/page404/page404.component';
import { guardGuard } from './auth/guard/guard.guard';
import { HomepageComponent } from './home/homepage/homepage.component';
import { EventdetailComponent } from './home/eventdetail/eventdetail.component';

const routes: Routes = [
  // tslint:disable-next-line: max-line-length
  { path: 'dash', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) ,canActivate:[guardGuard]},
  { path: 'crypto-ico-landing', component: CyptolandingComponent },
  {path:'auth',loadChildren:()=>import('./auth/auth.module' ).then(m=>m.AuthModule)},
  {path:'respo',component: LayoutComponent,loadChildren:()=>import('./dash-responsable/dash-responsable.module').then(m=>m.DashResponsableModule),canActivate:[guardGuard]},
  {
    path:'',redirectTo:'auth/login',pathMatch:'full',
  },
  // { path: '**', component: Page404Component },
 
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  },

   { path: '', component: HomepageComponent },
    { path: 'eventdetail/:id', component: EventdetailComponent },
    // Add more routes here if needed
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
