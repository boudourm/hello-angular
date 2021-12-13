import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Server} from "../databinding/server.model";


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<Server>();
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  onAddServer(name: HTMLInputElement) {
   this.serverCreated.emit(new Server('server',name.value,this.serverContentInput.nativeElement.value));
  }

  onAddBlueprint(name: HTMLInputElement) {
    this.serverCreated.emit(new Server('blueprint',name.value,this.serverContentInput.nativeElement.value));
  }

  constructor() {
    //This is intentional
  }

  ngOnInit(): void {
    // This is intentional
  }

}
