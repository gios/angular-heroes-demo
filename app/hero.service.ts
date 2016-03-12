import { Injectable } from "angular2/core";
import { HEROES } from "./mock-heroes";
import { IHero } from "./hero"

@Injectable()
export class HeroService {
  public getHeroes() {
    return new Promise<IHero[]>((resolve: any) =>
      setTimeout(() => resolve(HEROES), 2000)
    );
  }
}
