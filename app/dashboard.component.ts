import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: "my-dashboard",
  templateUrl: "app/dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  public ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  public gotoDetail(hero: Hero) {
    let link = ["/detail", hero.id];
    this.router.navigate(link);
  }
}

