import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetImageComponent } from './planet-image.component';



@NgModule({
  declarations: [PlanetImageComponent],
  imports: [
    CommonModule
  ],
  exports: [PlanetImageComponent]
})
export class PlanetImageModule { }
