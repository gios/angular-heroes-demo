import { DashboardComponent } from "./dashboard.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroesComponent } from "./heroes.component";
import { RouterConfig, provideRouter } from "@angular/router";

const routes: RouterConfig = [
  {
    component: HeroesComponent,
    path: "heroes",
  },
  {
    component: DashboardComponent,
    path: "dashboard",
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/dashboard",
  },
  {
    component: HeroDetailComponent,
    path: "detail/:id",
  },
];

export const appRouterProviders = [
  provideRouter(routes),
];
