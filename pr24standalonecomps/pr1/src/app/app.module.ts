import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
// import { SharedModule } from "./shared/shared.module";
import { DetailsComponent } from "./welcome/details/details.component";
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    //  SharedModule, // we don't use it in the AppComponent, WelcomeComponent  - and can remove it from here
    // we import it directly to the standalong component wgere we need it
    DetailsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
