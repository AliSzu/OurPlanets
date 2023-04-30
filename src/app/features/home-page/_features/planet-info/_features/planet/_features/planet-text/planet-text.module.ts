import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetTextComponent } from './planet-text.component';



@NgModule({
  declarations: [PlanetTextComponent],
  imports: [
    CommonModule
  ],
  exports: [PlanetTextComponent]
})
export class PlanetTextModule { }
