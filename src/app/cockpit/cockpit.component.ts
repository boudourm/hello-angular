import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  onAddServer() {
   // this.serverElements.push(new Server('server',this.newServerName,this.newServerContent));
  }

  onAddBlueprint() {
   // this.serverElements.push(new Server('blueprint',this.newServerName,this.newServerContent));
  }

  constructor() {
    //This is intentional
  }

  ngOnInit(): void {
    // This is intentional
  }

}
