import { HeroService } from "./hero.service";
import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroService],
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
      <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  public title = "Tour of Heroes";
}
