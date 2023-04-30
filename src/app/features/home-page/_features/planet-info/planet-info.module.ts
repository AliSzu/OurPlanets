import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetInfoComponent } from './planet-info.component';
import { PlanetButtonsModule } from './_features/planet-buttons/planet-buttons.module';
import { PlanetModule } from './_features/planet/planet.module';



@NgModule({
  declarations: [PlanetInfoComponent],
  imports: [
    CommonModule,
    PlanetButtonsModule,
    PlanetModule
  ],
  exports: [PlanetInfoComponent]
})
export class PlanetInfoModule { }
