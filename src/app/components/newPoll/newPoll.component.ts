import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';


@Component({
  selector: 'app-newpoll',
  templateUrl: './newPoll.component.html',
  styleUrls: ['./newPoll.component.css']
})
export class NewPollComponent implements OnInit {

  question: string;
  opt1: string;
  opt2: string;

  constructor(private router: Router) {


  }

  ngOnInit(): void {
  }

  addPoll() {

    db.collection("poll").add({

      question: this.question,
      opt1: this.opt1,
      intOpt1: 0,
      intOpt2: 0,
      opt2: this.opt2,
      eventRef: history.state.data
    });

    db.collection("events").doc(history.state.data).set({

      poll : true

    })
    this.router.navigate(['']); 
  }

  cancel(){
    this.router.navigate(['']); 
  }

}
