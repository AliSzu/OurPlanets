import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';
import { TitleResizeDirective } from './directive/title-resize.directive';



@NgModule({
  declarations: [TitleComponent, TitleResizeDirective],
  imports: [
    CommonModule
  ],
  exports: [TitleComponent]
})
export class TitleModule { }
