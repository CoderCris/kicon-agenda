import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newEvent(){
    this.router.navigate(['/createEvent']);
  }

  newContact(){
    this.router.navigate(["/addContact"]);
  }

  newGroup(){
    this.router.navigate(["/createGroup"]);
  }
}