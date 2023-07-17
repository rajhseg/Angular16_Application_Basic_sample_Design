import { Routes } from '@angular/router';
import { TapComponent } from './Components/tap/tap.component';
import { JqueryComponent } from './Components/jquery/jquery.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { AdminModule } from './Components/admin/admin.module';
import { AdminComponent } from './Components/admin/admin.component';
import { tapDataResolverFn } from './Services/resolve-names.service';
import { IsActivateFn } from './Services/custom-activate.service';
import { IsDeActivateFn } from './Services/custom-de-activate.service';

export const routes: Routes = [
    {   path:'tap/:id', 
        loadComponent: ()=> TapComponent, 
        resolve:{ alphas: tapDataResolverFn }, 
        canActivate: [IsActivateFn],
        data: { nums:[1,2,3] }
    },
    { path:'jquery', loadComponent: ()=> JqueryComponent, canDeactivate: [IsDeActivateFn] },
    { path:'notfound', loadComponent:()=> NotfoundComponent },
    { path:'admin', loadChildren:()=> import('./Components/admin/admin.module').then(x=>x.AdminModule), data: { preload: true } },
    { path:'**', redirectTo:'notfound'}
];
