import { Component } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { IScreenSaved } from '../../Models/ISaveScreen';

@Component({
  selector: 'app-tap',
  standalone: true,
  imports: [CommonModule, RouterModule, NgForOf],
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements IScreenSaved {
  public chars: string[] = [];
  public selectedChar: string = '';

  constructor(private router:ActivatedRoute){

    router.params.subscribe((x: any)=>{
      console.log(router.snapshot.data);
      this.chars = router.snapshot.data["alphas"];
      this.selectedChar = this.chars[parseInt( x?.id) - 1]
    });

  }
  
  isSaved(): boolean {
    return false;
  }
}
