import { Hero } from "./hero";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "./hero.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  directives: [HeroDetailComponent],
  selector: "my-heroes",
  styleUrls: ["app/heroes.component.css"],
  templateUrl: "app/heroes.component.html",
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public selectedHero: Hero;
  public addingHero: boolean;
  public error: any;

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  public onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  public getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  public ngOnInit() {
    this.getHeroes();
  }

  public gotoDetail() {
    this.router.navigate(["/detail", this.selectedHero.id]);
  }

  public addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  public close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }

  public deleteHero(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService
      .delete(hero)
      .then(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      })
      .catch(error => this.error = error);
  }
}
