import { Component, ViewChild } from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore'


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  public events: Observable<any[]>;
  public cat: Observable<any[]>;
  categoryValue$: boolean=false;
  //@ViewChild(DialogComponent) modal: DialogComponent;
  panelOpenState = false;

  constructor(private firestore: AngularFirestore) { 

    this.events = firestore.collection('events').valueChanges({ idField: 'eventId'});
    console.log('los eventos se cargan')

  }

  remove(id_event){
    db.collection('events').doc(id_event).delete().then(function(){
      console.log('Evento eliminado');
    }).catch(function(error){
      console.log('ERROR: algo falló en la eliminación');
    });
  }

}
