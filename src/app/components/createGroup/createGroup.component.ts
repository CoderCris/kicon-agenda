import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';


import { AngularFirestore } from '@angular/fire/firestore';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-creategroup',
  templateUrl: './createGroup.component.html',
  styleUrls: ['./createGroup.component.css']
})
export class CreateGroupComponent implements OnInit {

  groupName: string;
  group = new FormControl('', [Validators.required]);
  contacts: Observable<any[]>;
 

  constructor(private firestore: AngularFirestore,
    private router: Router,
    public dialog: MatDialog) {
    //this.contacts = db.collection('agenda').where("type", "==", "person").get();
  }

  ngOnInit(): void {

  }

  isEmpty() {
    if (this.group.hasError('required')) {
      return 'You must enter a value'
    }
  }

  addGroup(){
    // Iterar sobre mapa 'contacts' verificando sus campos
    // [cargar todos los type='person'] para iterar sobre ellos y seleccionarlos en checkbox
    // añadir cada contacto a un hash-map en firebase
    db.collection('agenda').add({

      /***Iterador here ?***
       * for (var key in this.contacts){
       *
       *   this.groupName: hash-mapFinal,
       *
       *   { key1 : val1 , key2 : val2 }
       *   
      */
      type: 'group'
    })
    this.router.navigate(['']); 
  }

  cancel(){
    this.router.navigate(['']); 
  }

}
