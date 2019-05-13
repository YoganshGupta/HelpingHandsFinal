import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Donator } from 'models/donator';
import { DonatorService } from 'services/donator.service';

import {FlashMessagesService} from "angular2-flash-messages"

@Component({
  selector: 'app-donator',
  templateUrl: './donator.component.html',
  styleUrls: ['./donator.component.css']
})
export class DonatorComponent implements OnInit {

  constructor(public route : Router, private _donatorService: DonatorService,public flashMessageService: FlashMessagesService) { }

  donatorModel = new Donator('','','','','','',''); 

  submitted = false

  ngOnInit() {
  }
  
  onDonatorSignupSubmit()
  {
    this.submitted = true
    this._donatorService.saveSignupDonator(this.donatorModel)
    .subscribe(
      data => 
      {
    console.log("Message"+ JSON.stringify(data));
    this.flashMessageService.show('You have signed up Successfully.Now login using your credentials',
    {cssClass: 'alert-success', timeout:3000});

      }, 
    error => console.log(error)
    )
    
    
    
    console.log(this.donatorModel);
     
    setTimeout(function() { }, 7000);
    this.route.navigate(['/logindonator']);
  }



}
