import { Pipe, PipeTransform } from '@angular/core';
import { Planet } from 'src/app/models/planets.model';
import { PLANETS_ICONS } from '../_maps/planet-icon.map';
@Pipe({
  name: 'getPlanetIcon'
})
export class GetPlanetIconPipe implements PipeTransform {

  transform(value: Planet): unknown {
    return PLANETS_ICONS.get(value.name);
  }

}
