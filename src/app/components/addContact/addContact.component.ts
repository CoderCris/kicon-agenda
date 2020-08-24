import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';


@Component({
  selector: 'app-addcontact',
  templateUrl: './addContact.component.html',
  styleUrls: ['./addContact.component.css']
})
export class AddContactComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);

  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  isEmpty() {
    if (this.name.hasError('required')) {
      return 'You must enter a value'
    }
  }

  addContact() {

    db.collection('agenda').add({
      mail: this.email,
      name: this.name,
      type: 'person'
    })
    console.log('addedContact');
    this.router.navigate(['']); 
  }

  cancel(){
    this.router.navigate(['']); 
  }
}
