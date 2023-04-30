import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetDetailComponent } from './planet-detail.component';



@NgModule({
  declarations: [PlanetDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [PlanetDetailComponent]
})
export class PlanetDetailModule { }
