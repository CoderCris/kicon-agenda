import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addcontact',
  templateUrl: './addContact.component.html',
  styleUrls: ['./addContact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }
  
  email = new FormControl('', [Validators.required, Validators.email]);
  contact = new FormControl('',  [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  isEmpty() {
    if (this.contact.hasError('required')) {
      return 'You must enter a value'
    }
  }

  addContact(){
    //Falta meter en la bbdd
    this.router.navigate(['']); 
  }

  cancel(){
    this.router.navigate(['']); 
  }
}
