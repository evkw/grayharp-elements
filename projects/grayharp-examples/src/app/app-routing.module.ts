import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProxyRouteComponent } from '@example-core/components';

const auxRoutes = [
    {
        path: 'options',
        outlet: 'sidebar',
        component: ProxyRouteComponent,
        children: [
          {
            path: '',
            loadChildren:
              './features/+options/options-routing.module#OptionsRoutingModule'
          }
        ]
      },
];

const routes = [
    ...auxRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
