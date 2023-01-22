import { Injectable } from '@angular/core';
import { Hero, heroes } from './heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}
  getHeroes(): Hero[] {
    return heroes;
  }
}
