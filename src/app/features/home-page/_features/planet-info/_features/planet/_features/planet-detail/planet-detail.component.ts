import { Component, OnInit, Input } from '@angular/core';
import { Planet } from 'src/app/models/planets.model';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {

  constructor() { }
  @Input() planet: Planet | null = null;

  ngOnInit(): void {
  }

}
