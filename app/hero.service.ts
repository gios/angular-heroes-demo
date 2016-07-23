import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Injectable } from "@angular/core";

@Injectable()
export class HeroService {
  public getHeroes() {
    return Promise.resolve(HEROES);
  }

  public getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 2000)
    );
  }

  public getHero(id: number) {
    return this.getHeroes()
    .then(heroes => heroes.find(hero => hero.id === id));
  }
}
