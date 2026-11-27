import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../pages/inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'explorar',
        loadChildren: () => import('../pages/explorar/explorar.module').then(m => m.ExplorarPageModule)
      },
      {
        path: 'sitio-form',
        loadChildren: () => import('../pages/sitio-form/sitio-form.module').then(m => m.SitioFormPageModule)
      },
      {
        path: 'favoritos',
        loadChildren: () => import('../pages/favoritos/favoritos.module').then(m => m.FavoritosPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}