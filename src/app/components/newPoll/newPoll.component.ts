import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newpoll',
  templateUrl: './newPoll.component.html',
  styleUrls: ['./newPoll.component.css']
})
export class NewPollComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addPoll(){
    //Falta meter en la bbdd
    this.router.navigate(['']); 
  }

  cancel(){
    this.router.navigate(['']); 
  }

}