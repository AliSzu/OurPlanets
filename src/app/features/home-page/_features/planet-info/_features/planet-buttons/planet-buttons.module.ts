import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetButtonsComponent } from './planet-buttons.component';
import { GetPlanetIconPipe } from './_pipes/get-planet-info.pipe';
import { PlanetModule } from '../planet/planet.module';



@NgModule({
  declarations: [PlanetButtonsComponent, GetPlanetIconPipe],
  imports: [
    CommonModule
  ],
  exports: [PlanetButtonsComponent]
})
export class PlanetButtonsModule { }
