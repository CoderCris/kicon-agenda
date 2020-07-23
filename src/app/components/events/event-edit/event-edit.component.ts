import { Component, OnInit } from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  id: string; //para registrar el evento a editar
  event_name: string;
  date: string;
  time: string;
  contacts: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.id = "vaHGpYpPvUWtC5DPyzC7";

  }

  editName() {
    db.collection("events").doc(this.id).update({

      name: this.event_name,
    })

  }

  editDate() {

    db.collection("events").doc(this.id).update({

      date: this.date,
    })

  }

  editTime() {
    db.collection("events").doc(this.id).set({

      time: this.time,
    })

  }

  editContacts() {
    db.collection("events").doc(this.id).set({

      contacts: this.contacts,
    })

  }

  eraseEvent() {
    db.collection("events").doc(this.id).delete();
    this.router.navigate(['']); 
  }

  cancel(){
    //enroutamiento a pagina principal
    this.router.navigate(['']); 
  }

}
