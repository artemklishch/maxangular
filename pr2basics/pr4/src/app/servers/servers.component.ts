import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewService = false
  serverCreationStatus = "No server was created!"
  serverName =''
  serverCreated = false
  servers = ['server 1', 'server 2']

  constructor() {
    setTimeout(() => {
      this.allowNewService = true
    }, 2000)
  }

  ngOnInit(): void {}

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Server is - ' + this.serverName
    this.serverCreated = true
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event: Event){
   this.serverName = (<HTMLInputElement>event.target).value
  }
}
