import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'change-detection',
        loadChildren: () => import('../change-detection-example/change-detection-example.module').then(m => m.ChangeDetectionExampleModule)
      },
      {
        path: 'pipes',
        loadChildren: () => import('../pipes-example/pipes-example.module').then(m => m.PipesExampleModule)
      },
      {
        path: 'trackby',
        loadChildren: () => import('../track-by-example/track-by-example.module').then(m => m.TrackByExampleModule)
      },
      {
        path: 'virtual-scroll',
        loadChildren: () => import('../virtual-scroll-example/virtual-scroll-example.module').then(m => m.VirtualScrollExampleModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
