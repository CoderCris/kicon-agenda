import { Component, OnInit } from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  id: string; //para registrar el evento a editar
  name: string;
  date: string;
  time: string;
  contacts: string;

  constructor() { }

  ngOnInit(): void {
    this.id = "";

  }

  editName() {
    db.collection("events").doc(this.id).set({

      name: this.name,
    })

  }

  editDate() {

    db.collection("events").doc(this.id).set({

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

  }

}
