

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {
  constructor(private http: HttpClient) { }

  // Variable de entorno que hemos creado en la carpeta environments
  private baseUrl: string = environments.baseUrl;

  // Metodo para obtener los heroes mediante peticion http
  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
  }


  getHeroById(id: string): Observable<Hero | undefined> {

    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError(error => of(undefined))
      );
  }


}
