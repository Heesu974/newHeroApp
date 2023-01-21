import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero, heroes } from '../heroes';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  hero!: Hero | undefined;
  heroes: Hero[] = heroes;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const heroIdFromRoute = Number(routeParams.get('id'));

    console.log(heroIdFromRoute);

    this.hero = this.heroes.find((hero) => hero.id === heroIdFromRoute);
  }
}
