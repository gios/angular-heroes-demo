import { AppComponent } from "./app.component";
import { appRouterProviders } from "./app.routes";
import { InMemoryDataService } from "./in-memory-data.service";
import { HTTP_PROVIDERS, XHRBackend } from "@angular/http";
import { bootstrap } from "@angular/platform-browser-dynamic";
import { InMemoryBackendService, SEED_DATA } from "angular2-in-memory-web-api";

bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
  { provide: SEED_DATA, useClass: InMemoryDataService }, // in-mem server data
]);
