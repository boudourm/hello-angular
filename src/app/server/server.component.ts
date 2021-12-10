import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  // selector : '[app-server]', '.app-server'
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus:  string = 'offline';
  allowNewServer = false;
  serverCreationStatus = 'No server wa created!';
  serverName = 'TestServer';

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },3000);
  }

  OnCreateServer() {
    this.serverCreationStatus = "Server was created! Name is "+this.serverName;
  }

  OnUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
