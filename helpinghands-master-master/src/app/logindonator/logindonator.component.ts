import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DonatorService } from 'services/donator.service';


import {FlashMessagesService} from "angular2-flash-messages"


@Component({
  selector: 'app-logindonator',
  templateUrl: './logindonator.component.html',
  styleUrls: ['./logindonator.component.css']
})
export class LogindonatorComponent implements OnInit {
 
  donator = {
  "username": "",
  "password": ""
  }

  receivedDonator: any

  constructor(public route : Router, private _donatorService: DonatorService,public flashMessageService: FlashMessagesService) { }

  ngOnInit() {
  }

  onLogin()
  {
    console.log(this.donator);


    this._donatorService.authenticateDonator(this.donator)
    .subscribe(
      data => {
        //console.log("Message"+ JSON.stringify(data)),
        this.receivedDonator = data
        console.log(JSON.stringify(this.receivedDonator));
        if(this.receivedDonator){
          this.flashMessageService.show('You are logged in Successfully',
         {cssClass: 'alert-success', timeout:3000});
        this.route.navigate(['/options'],{
          queryParams: {data1: JSON.stringify(data) }
        });
      }
      else{

        this.showSuccessMssg();
        console.log('Inside else ');
        
      }
    },
      error => console.log(error)
    )

  

    
  }

 
  showSuccessMssg(){
    
    this.flashMessageService.show('Invalid Credentials! Please login again  ',
         {cssClass: 'alert-danger', timeout:4000});
         
      }
  
}