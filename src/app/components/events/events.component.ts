import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router'
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


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

  constructor(private firestore: AngularFirestore, 
              private router: Router,
              public dialog: MatDialog) { 

    this.events = firestore.collection('events').valueChanges({ idField: 'eventId'});

  }

  remove(id_event){
   
    db.collection('events').doc(id_event).delete().then(function(){
      console.log('Evento eliminado');
    }).catch(function(error){
      console.log('ERROR: algo falló en la eliminación');
    });
    
  }

  editEvent(){
    this.router.navigate(['editEvent'])
  }


  openDialog(): void{
    const dialogRef = this.dialog.open(DialogEvent, {
      width: '1000px',
      data: { event:this.events} //Ver como pasarle el evento al dialog
    })
  }

}

@Component({
  selector: 'eventViewDialog',
  templateUrl: 'eventDialog.html'
})
export class DialogEvent {
  constructor(
    public dialogRef: MatDialogRef<DialogEvent>,
    @Inject(MAT_DIALOG_DATA) public data: EventsComponent) {}
}
