import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ZooComponent } from './zoo/zoo.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: ZooComponent },
  { path: 'About', component: AboutComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
