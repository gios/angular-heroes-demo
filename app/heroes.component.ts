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

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  public onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  public getHeroes() {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  public ngOnInit() {
    this.getHeroes();
  }

  public gotoDetail() {
    this.router.navigate(["/detail", this.selectedHero.id]);
  }
}
