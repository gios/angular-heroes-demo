import { Hero } from "./hero";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class HeroService {
  private heroesUrl = "app/heroes"; // URL to web api

  constructor(private http: Http) { }

  public getHeroes() {
    return this.http.get(this.heroesUrl)
    .toPromise()
    .then(response => response.json().data as Hero[])
    .catch(this.handleError);
  }

  public getHero(id: number) {
    return this.getHeroes()
    .then(heroes => heroes.find(hero => hero.id === id));
  }

  private handleError(error: any) {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }
}
