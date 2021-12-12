import { Component, OnInit } from '@angular/core';
import {Server} from "./server.model";

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  serverElements: Server[] = [];

  constructor() {
    //This is intentional
  }

  ngOnInit(): void {
    //This is intentional
  }


}
