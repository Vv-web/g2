import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'guotao' },
      { id: 2, name: 'Lv' },
      { id: 3, name: 'cyc' },
      { id: 4, name: 'qincen' },
      { id: 5, name: 'hahah' },
      { id: 6, name: 'dou' },
      { id: 7, name: 'pilaoban' },
      { id: 8, name: 'ggg' },
      { id: 9, name: 'Yu' },
      { id: 10, name: 'Xia' },
      {id:11,name:'Hei'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}