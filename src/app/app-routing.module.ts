import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StreamingPageComponent } from './streaming-page/streaming-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { 
    path:'home',
    data: { title: 'Home', preload: true },
    loadChildren: () => import('./streaming-page/streaming-page.module').then(m => m.StreamingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
