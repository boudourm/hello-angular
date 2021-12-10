import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  displayedDetails = false;
  buttonClicks: string[] = [''];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDetailsDisplay() {
    this.displayedDetails = !this.displayedDetails;
    this.buttonClicks.push('Button click at : '+new Date()+
      ', displayedDetails : '+!this.displayedDetails+'=>'+this.displayedDetails);
  }


}
