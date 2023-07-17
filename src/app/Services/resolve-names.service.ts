import { Inject, Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveNamesService {

  constructor() { }

  GetData(): string[] {
    return ["aa","bb","cc"];
  }
}

export const tapDataResolverFn: ResolveFn<string[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)=>{
 let nameService : ResolveNamesService = inject(ResolveNamesService);
 let req = of( nameService.GetData());
 return req.pipe(delay(2000));
};