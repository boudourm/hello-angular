import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Server} from "./server.model";

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Shadowdom
})
export class DatabindingComponent implements OnInit {
  serverElements: Server[] = [];

  onAddServer(server: Server) {
    this.serverElements.push(server);
  }

  constructor() {
    //This is intentional
  }

  ngOnInit(): void {
    //This is intentional
  }


}
