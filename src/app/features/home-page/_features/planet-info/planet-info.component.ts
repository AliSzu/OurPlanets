import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planets.model';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss']
})
export class PlanetInfoComponent implements OnInit {

  constructor() { }
  public planet: Planet | null = null;
  public isOn: boolean = false;

  setPlanet(planet: Planet) {
    this.planet = planet
    this.isOn = true;
}

  ngOnInit(): void {
  }

}
