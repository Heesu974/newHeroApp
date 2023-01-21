import { Component, Input } from '@angular/core';
import { Hero, heroes } from '../heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = heroes;
  selectedHero!: Hero;

  ngOnInit(): void {}

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.log('selectedHero', this.selectedHero);
  }
}
