import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction.component';
import { IntroductionListModule } from './_features/introduction-list/introduction-list.module';



@NgModule({
  declarations: [IntroductionComponent],
  imports: [
    CommonModule,
    IntroductionListModule
  ],
  exports: [IntroductionComponent]
})
export class IntroductionModule { }
