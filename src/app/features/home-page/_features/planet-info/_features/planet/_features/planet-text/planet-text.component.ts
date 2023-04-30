import { Component, OnInit, Input } from '@angular/core';
import { Planet } from 'src/app/models/planets.model';

@Component({
  selector: 'app-planet-text',
  templateUrl: './planet-text.component.html',
  styleUrls: ['./planet-text.component.scss']
})
export class PlanetTextComponent implements OnInit {

  constructor() { }
  @Input() planet: Planet | null = null;

  ngOnInit(): void {
  }

}
