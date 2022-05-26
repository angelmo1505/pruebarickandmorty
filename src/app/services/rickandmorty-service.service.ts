import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService{

  constructor(
    private http: HttpClient,
  ) { }

  getRickandMortyCharacters(){
    return this.http.get(environment.characters);
  }
  
  getRickandMortyLocations(){
    return this.http.get(environment.locations);
  }

  getRickandMortyEpisodes(){
    return this.http.get(environment.episodes);
  }
}
