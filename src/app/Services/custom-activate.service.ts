import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { TokenService } from "./token.service";
import { inject } from "@angular/core";

export const IsActivateFn: CanActivateFn = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot)=>{
  let tokenObj: TokenService = inject(TokenService);
  return tokenObj.isValid();
}