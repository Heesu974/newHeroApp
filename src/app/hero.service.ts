import { Injectable } from '@angular/core';
import { Hero, HEROES } from './heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageservice: MessageService) {}
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);

    this.messageservice.add('heroes 데이터가 호출되었습니다.');
    return heroes;
  }
}
