import { AppComponent } from "./app.component";
import { appRouterProviders } from "./app.routes";
import { bootstrap } from "@angular/platform-browser-dynamic";

bootstrap(AppComponent, [appRouterProviders]);
