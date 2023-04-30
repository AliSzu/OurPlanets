import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { HttpHeaders } from '@angular/common/http';
import { Planet } from 'src/app/models/planets.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private apiKey = '60acd8aaeemshef0da8ad01375d8p18cecbjsn449adc7ef812';
  private apiHost = 'planets-info-by-newbapi.p.rapidapi.com'
  
  headers = new HttpHeaders().set('X-RapidAPI-Key', this.apiKey).set('X-RapidAPI-Host', this.apiHost);
  constructor(private httpClient: HttpClient) { }
  
  getPlanetList(): Observable<Planet[]> {
    return this.httpClient.get('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list', {headers: this.headers}) as Observable<Planet[]>;
  }
}
