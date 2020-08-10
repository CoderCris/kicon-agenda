import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groupsview',
  templateUrl: './groupView.component.html',
  styleUrls: ['./groupView.component.css']
})
export class GroupViewComponent implements OnInit {

  contacts = ['Carlota Perez - carlope@gmail.com', 'Paco Díaz - pacodiaz@hotmail.es', 'Lolita Pluma - lalola@outlook.com'];

  constructor() { }

  ngOnInit(): void {
  }

}