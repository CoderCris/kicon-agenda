import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creategroup',
  templateUrl: './createGroup.component.html',
  styleUrls: ['./createGroup.component.css']
})
export class CreateGroupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  group = new FormControl('',  [Validators.required]);

  isEmpty() {
    if (this.group.hasError('required')) {
      return 'You must enter a value'
    }
  }

  addGroup(){
    //Falta meter en la bbdd
    this.router.navigate(['']); 
  }

  cancel(){
    this.router.navigate(['']); 
  }

}
