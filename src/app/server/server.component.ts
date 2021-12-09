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

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },3000);
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
