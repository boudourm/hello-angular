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
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

    setTimeout(()=>{
      this.allowNewServer = true;
    },3000);
  }

  OnCreateServer() {
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is "+this.serverName;
  }

  OnUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor(){
    return this.serverStatus==='online' ? 'green' : 'red';
  }
}
