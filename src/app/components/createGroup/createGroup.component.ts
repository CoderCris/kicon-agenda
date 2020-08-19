import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';

@Component({
  selector: 'app-creategroup',
  templateUrl: './createGroup.component.html',
  styleUrls: ['./createGroup.component.css']
})
export class CreateGroupComponent implements OnInit {

  contacts = new Map<string, string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  groupName: string;
  group = new FormControl('',  [Validators.required]);

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
