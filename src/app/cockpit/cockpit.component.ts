import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Server} from "../databinding/server.model";


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<Server>();
  newServerName = '';
  newServerContent = '';

  onAddServer() {
   this.serverCreated.emit(new Server('server',this.newServerName,this.newServerContent));
  }

  onAddBlueprint() {
    this.serverCreated.emit(new Server('blueprint',this.newServerName,this.newServerContent));
  }

  constructor() {
    //This is intentional
  }

  ngOnInit(): void {
    // This is intentional
  }

}
