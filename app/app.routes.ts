import { HeroesComponent } from "./heroes.component";
import { RouterConfig, provideRouter } from "@angular/router";

const routes: RouterConfig = [
  {
    component: HeroesComponent,
    path: "heroes",
  },
];

export const appRouterProviders = [
  provideRouter(routes),
];
