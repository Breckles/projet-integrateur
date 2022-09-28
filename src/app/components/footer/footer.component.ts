import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
 
})
export class FooterComponent {
  step = 0;
  setStep(index: number) {
      this.step = index;
  }
  nextStep() {
      this.step++;
  }
  prevStep() {
      this.step--;
  }
/*  constructor() { }
*/
  /*ngOnInit(): void {
  } */
}
