import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { BackgroundVideoModule } from './_features/background-video/background-video.module';
import { TitleModule } from './_features/title/title.module';
import { IntroductionModule } from './_features/introduction/introduction.module';
import { PlanetInfoComponent } from './_features/planet-info/planet-info.component';
import { PlanetInfoModule } from './_features/planet-info/planet-info.module';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    BackgroundVideoModule,
    TitleModule,
    IntroductionModule,
    PlanetInfoModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
