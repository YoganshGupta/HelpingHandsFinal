import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loggedinheader',
  templateUrl: './loggedinheader.component.html',
  styleUrls: ['./loggedinheader.component.css']
})
export class LoggedinheaderComponent implements OnInit {

  @Input('donator') donatorName: string;

  constructor() { }

  ngOnInit() {

    console.log(this.donatorName)
  }

}
