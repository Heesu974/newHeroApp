import { Component } from '@angular/core';
import { Hero } from '../heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero!: Hero;

  constructor(private heroservice: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes = this.heroservice.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.log('selectedHero', this.selectedHero);
  }
}
