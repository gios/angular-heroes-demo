import { Component } from "angular2/core";

interface IHero {
  id: number;
  name: string;
}

@Component({
  selector: "my-app",
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <div><input [(ngModel)]="hero.name" placeholder="name"></div>
    </div>
  `,
})

export class AppComponent {
  public title: string = "Tour of heroes";
  public hero: IHero = {
    id: 1,
    name: "Windstorm",
  };
}
