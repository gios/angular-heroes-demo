import { Hero } from "./hero";
import { HeroSearchService } from "./hero-search.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Component({
  directives: [],
  providers: [HeroSearchService],
  selector: "hero-search",
  templateUrl: "app/hero-search.component.html",
})
export class HeroSearchComponent implements OnInit {
  public heroes: Observable<Hero[]>;
  public searchSubject = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router) {
  }

  public search(term: string) {
    this.searchSubject.next(term);
  }

  public ngOnInit() {
    this.heroes = this.searchSubject
      .asObservable()
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.heroSearchService.search(term)
        : Observable.of<Hero[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  public gotoDetail(hero: Hero) {
    let link = ["/detail", hero.id];
    this.router.navigate(link);
  }
}
