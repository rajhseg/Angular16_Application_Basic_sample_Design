import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IScreenSaved } from 'src/app/Models/ISaveScreen';
import { TokenService } from 'src/app/Services/token.service';
import { Logger } from 'src/app/Models/Logger';
import { ApiService } from 'src/app/Services/api.service';
import { SampleComponent } from '../sample/sample.component';

@Component({
  selector: 'app-jquery',
  standalone: true,
  imports: [CommonModule, SampleComponent],
  templateUrl: './jquery.component.html',
  styleUrls: ['./jquery.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JqueryComponent implements IScreenSaved {
  id: number = 3;
  idString: string = "4";

  constructor(private changeRef: ChangeDetectorRef, private tokenobj: TokenService, private logger: Logger, private apiObj:ApiService){
    logger.LogError("sample");
  }

  isSaved(): boolean {
    return true;
  }

  ChangeValueToFive(){
    this.id = ++this.id;
  }

  IdChange(id:string){
   alert('value change');
  }

  TestingRetryCall(){
    this.apiObj.TestingRetryHttpCall();
  }

  ChangeValueToEight(){
    this.id = 8;
    this.changeRef.markForCheck();
  }

  SetTokenToTrue(){
     this.tokenobj.setToken('asdfgggg');
  }

  SetTokenToFalse(){
    this.tokenobj.clearToken();
  }
  
}
