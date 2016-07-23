import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "my-hero-detail",
  styleUrls: ["app/hero-detail.component.css"],
  templateUrl: "app/hero-detail.component.html",
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  @Input() public hero: Hero;
  @Output() public close = new EventEmitter();
  public sub: any;
  public error: any;
  public navigated = false;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let idType = "id";
      console.log(params[idType])
      if (params[idType] !== undefined) {
        let id = +params[idType];
        this.navigated = true;
        this.heroService.getHero(id)
          .then(hero => this.hero = hero);
      } else {
        this.navigated = false;
        this.hero = new Hero();
      }
    });
  }

  public save() {
    this.heroService
      .save(this.hero)
      .then(hero => {
        this.hero = hero;
        this.goBack(hero);
      })
      .catch(error => this.error = error);
  }

  public goBack(savedHero: Hero = null) {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
