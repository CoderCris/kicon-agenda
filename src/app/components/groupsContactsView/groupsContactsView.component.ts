import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router'
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-groupscontactsview',
  templateUrl: './groupsContactsView.component.html',
  styleUrls: ['./groupsContactsView.component.css']
})
export class GroupsContactsViewComponent implements OnInit {

  public contacts: Observable<any[]>;

  constructor(private firestore: AngularFirestore,
    private router: Router) {

    this.contacts = firestore.collection('agenda').valueChanges({ idField: 'eventId' });
  }

  ngOnInit(): void {


  }
}
