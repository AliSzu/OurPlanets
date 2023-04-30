import { Component, OnInit } from '@angular/core';
import { PlanetsService } from 'src/app/core/api/planets.service';
import { firstValueFrom, Observable } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';
import { Planet } from 'src/app/models/planets.model';

@Component({
  selector: 'app-planet-buttons',
  templateUrl: './planet-buttons.component.html',
  styleUrls: ['./planet-buttons.component.scss']
})
export class PlanetButtonsComponent implements OnInit { 
  public planets = this.planetsService.getPlanetList() as Observable<Planet[]>;
  public planetList: Planet[] = [];

  public unsorted(a: Planet ,b : Planet): void { 
    a.id - b.id 
  }

  async getPlanetInfo() {
    const payload = await firstValueFrom(this.planetsService.getPlanetList());
    this.planetList = payload;
  }
  constructor(private planetsService: PlanetsService) { }

  @Output() selectedPlanet = new EventEmitter<Planet>();

  ngOnInit(): void {
    this.getPlanetInfo()

  }

}
