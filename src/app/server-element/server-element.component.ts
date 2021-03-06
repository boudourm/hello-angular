import {Component, Input, OnInit} from '@angular/core';
import {Server} from "../databinding/server.model";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: Server;

  constructor() {
    //This is intentional
  }

  ngOnInit(): void {
    //This is intentional
  }

}
