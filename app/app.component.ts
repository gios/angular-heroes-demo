import { Component } from "angular2/core";

interface IHero {
  id: number;
  name: string;
}

@Component({
  selector: "my-app",
  template: `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>`,
})

export class AppComponent {
  public title: string = "Tour of heroes";
  public hero: IHero = {
    id: 1,
    name: "Windstorm",
  };
}
