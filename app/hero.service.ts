import { HEROES } from "./mock-heroes";
import { Injectable } from "@angular/core";

@Injectable()
export class HeroService {
  public getHeroes() {
    return Promise.resolve(HEROES);
  }
}
