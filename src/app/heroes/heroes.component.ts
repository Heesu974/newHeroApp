import { Component } from '@angular/core';
import { Hero } from '../heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero!: Hero;

  messages: string[] = [];

  constructor(
    private heroservice: HeroService,
    private messageservice: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroservice.getHeroes().subscribe((observableHeroes) => {
      console.log(observableHeroes);
      this.heroes = observableHeroes;
    });
    this.messages = this.messageservice.messages;
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.log('selectedHero', this.selectedHero);
    this.messageservice.add(
      `${this.selectedHero.id} ${this.selectedHero.name}가 선택되었습니다.`
    );
  }
}
