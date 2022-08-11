import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeverComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Servers2Component } from './servers2/servers2.component';

@NgModule({
  declarations: [AppComponent, SeverComponent, ServersComponent, Servers2Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
