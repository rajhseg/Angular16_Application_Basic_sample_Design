import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from "@angular/router";
import { IScreenSaved } from "../Models/ISaveScreen";

export const IsDeActivateFn: CanDeactivateFn<IScreenSaved> = (component: IScreenSaved, currentRoute: ActivatedRouteSnapshot, 
  currentState: RouterStateSnapshot, nextState: RouterStateSnapshot)=>{
    if(component.isSaved){
      return component.isSaved();
    }
    return true;
  }