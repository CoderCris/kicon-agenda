import { Component, OnInit } from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  id: string; //para registrar el evento a editar
  event_name: string;
  date: string;
  hour: string;
  minutes: string;
  contacts: string;
  edit = new FormControl('', [Validators.required]);

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.id = history.state.data;
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

      hour: this.hour,
      minutes: this.minutes
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

  done(){
    //enroutamiento a pagina principal
    this.router.navigate(['']); 
  }


}
