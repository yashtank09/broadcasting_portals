import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StreamingPageComponent } from './streaming-page.component';

const routes: Routes = [
  {
    path:'',
    component: StreamingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamingPageRoutingModule { }
