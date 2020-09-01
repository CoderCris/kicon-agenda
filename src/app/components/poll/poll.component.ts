import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';

import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  public polls: Observable<any[]>;
  constructor(private firestore: AngularFirestore,) { 
    this.polls = firestore.collection('poll').valueChanges({ idField: 'eventId'});
  }

  ngOnInit(): void {
  }

}