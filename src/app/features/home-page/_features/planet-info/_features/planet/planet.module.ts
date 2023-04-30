import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetComponent } from './planet.component';
import { PlanetTextComponent } from './_features/planet-text/planet-text.component';
import { PlanetImageComponent } from './_features/planet-image/planet-image.component';
import { PlanetDetailComponent } from './_features/planet-detail/planet-detail.component';
import { PlanetTextModule } from './_features/planet-text/planet-text.module';
import { PlanetImageModule } from './_features/planet-image/planet-image.module';
import { PlanetDetailModule } from './_features/planet-detail/planet-detail.module';



@NgModule({
  declarations: [PlanetComponent],
  imports: [
    CommonModule,
    PlanetTextModule,
    PlanetImageModule,
    PlanetDetailModule
  ],
  exports: [PlanetComponent]
})
export class PlanetModule { }
