import { HeroService } from "./hero.service";
import { HeroesComponent } from "./heroes.component";
import { Component } from "@angular/core";

@Component({
  directives: [HeroesComponent],
  providers: [HeroService],
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
  `,
})
export class AppComponent {
  public title = "Tour of Heroes";
}
