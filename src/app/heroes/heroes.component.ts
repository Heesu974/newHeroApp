import { Component } from '@angular/core';
import { Hero } from '../heroes';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';

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
  getHeroes(): void {
    this.heroservice.getHeroes().subscribe((observableHeroes) => {
      console.log(observableHeroes);
      this.heroes = observableHeroes;
    });
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.log('selectedHero', this.selectedHero);
  }
}
