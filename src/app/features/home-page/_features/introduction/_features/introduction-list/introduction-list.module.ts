import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionListComponent } from './introduction-list.component';



@NgModule({
  declarations: [IntroductionListComponent],
  imports: [
    CommonModule
  ],
  exports: [IntroductionListComponent]
})
export class IntroductionListModule { }
