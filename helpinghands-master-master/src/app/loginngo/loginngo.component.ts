import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgoService } from 'services/ngo.service';


import {FlashMessagesService} from "angular2-flash-messages"



@Component({
  selector: 'app-loginngo',
  templateUrl: './loginngo.component.html',
  styleUrls: ['./loginngo.component.css']
})
export class LoginngoComponent implements OnInit {

  ngo = {
    "username": "",
    "password": ""
    }
  
    receivedNgo: any
  
  
  constructor(public route : Router,private _ngoService: NgoService, public flashMessageService: FlashMessagesService) { }

  ngOnInit() {
  }

  onLogin()
  {
    console.log(this.ngo);

    this._ngoService.authenticateNgo(this.ngo)
    .subscribe(
      data => {
        //console.log("Message"+ JSON.stringify(data)),
        this.receivedNgo = data
        console.log(JSON.stringify(this.receivedNgo));
        if(this.receivedNgo){
          this.flashMessageService.show('You are logged in Successfully',
         {cssClass: 'alert-success', timeout:3000});
        this.route.navigate(['/requirements'],{
          queryParams: {data1: JSON.stringify(data) }
        });
      }
      else{
          this.showSuccessMssg();
          console.log('insiide else')
        
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
