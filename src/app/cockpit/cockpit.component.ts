import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Server} from "../databinding/server.model";


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<Server>();
  newServerContent = '';

  onAddServer(name: HTMLInputElement) {
   this.serverCreated.emit(new Server('server',name.value,this.newServerContent));
  }

  onAddBlueprint(name: HTMLInputElement) {
    this.serverCreated.emit(new Server('blueprint',name.value,this.newServerContent));
  }

  constructor() {
    //This is intentional
  }

  ngOnInit(): void {
    // This is intentional
  }

}
