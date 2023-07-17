import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent, RouterLink, RouterOutlet } from '@angular/router';
import { TokenService } from './Services/token.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StandloneFeatures';
  isNavigation: boolean = false;

  constructor(private route: Router, private tokenObj:TokenService){

   this.tokenObj.isAuthChange.subscribe((x: boolean)=>{
      if(x){
      alert("token set");
      }
      else{
         alert("Token cleared");
      }
   });

     this.route.events.subscribe((x: any)=>{
        if(x instanceof NavigationStart){
            this.isNavigation = true;
        } 
        else if(x instanceof NavigationEnd){
           this.isNavigation = false;
        } else if(x instanceof NavigationError){
            this.isNavigation = false;
        }
     });
  }

}
