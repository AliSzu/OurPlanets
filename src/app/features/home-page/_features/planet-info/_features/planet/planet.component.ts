import { Component, OnInit, Input } from '@angular/core';
import { Planet } from 'src/app/models/planets.model';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {


  constructor() { }
  @Input() planet: Planet | null = null

  ngOnInit(): void {
  }

}

