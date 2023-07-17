import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  host:{
    sampleid: 'sampleId'
  }
})
export class SampleComponent {
  sampleId: number = 1;

   @Input('userid') userId: string = '';
   @Output('idchange') onIdChange: EventEmitter<string> = new EventEmitter<string>();

   @HostBinding('id') componentId = '';

   @HostListener('click') componentClick(evt:any) {
     console.log('host is clicked');
   }

   changeID(){
    let sample = ++this.sampleId;
    this.componentId = sample.toString();
    this.onIdChange.emit(sample.toString());
   }
}
