import { enableProdMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { AnalyticsService } from "./app/shared/analytics.service";
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    // AnalyticsService
  ],
});
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
