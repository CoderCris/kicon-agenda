import { Component, OnInit, NgZone, Input } from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

@Input('ngModel')

export class EventComponent implements OnInit {

  user :  "WnV38IlKRnuRMhbHmGRwKnhhptDX2"; //temporal para evitar authSys

  event_name: string;
  date: string;
  time: string;
  contacts: string[];
  constructor(private router: Router) { }

  ngOnInit() { }

  addEvent() {

    //var user = firebase.auth().currentUser;

    //if(user){

    db.collection("events").add({

      name: this.event_name,
      date: this.date,
      contacts: this.contacts,
    })

    //}
  }
  cancel(){
    //enroutamiento a pagina principal
    this.router.navigate(['']); 
  }

}
