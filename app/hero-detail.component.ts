import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "my-hero-detail",
  templateUrl: "app/hero-detail.component.html",
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  @Input()
  public hero: Hero;
  public sub: any;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let idType = "id";
      let id = +params[idType];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public goBack() {
    window.history.back();
  }
}
