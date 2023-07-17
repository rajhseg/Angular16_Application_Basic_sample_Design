import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [ 
  { path:'', component:AdminComponent, children:[
      { path:'about', component: AboutComponent},
      { path:'services', component: ServicesComponent},
      { path:'settings', component: SettingsComponent}
  ]}  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
