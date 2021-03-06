import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

/** Firebase Modules */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { config } from './services/utils/firebase';

/** Our Components */
import { AppComponent } from './app.component';
import { EventsComponent } from './components/events/events.component';
import { EventComponent } from './components/events/event/event.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AddContactComponent } from './components/addContact/addContact.component';
import { CreateGroupComponent } from './components/createGroup/createGroup.component';
import { GroupsContactsViewComponent } from './components/groupsContactsView/groupsContactsView.component';
import { EventEditComponent } from './components/events/event-edit/event-edit.component'
import { MainpageComponent } from './components/mainpage/mainpage.component'
import { GroupViewComponent } from './components/groupView/groupView.component'
import { NewPollComponent } from './components/newPoll/newPoll.component'
import { PollComponent } from './components/poll/poll.component'

/** Materials Modules */
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventComponent, 
    ToolbarComponent, 
    EventEditComponent,
    AddContactComponent,
    CreateGroupComponent,
    GroupsContactsViewComponent,
    MainpageComponent,
    GroupViewComponent,
    NewPollComponent,
    PollComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireAnalyticsModule,
    AngularFireModule,
    AngularFireAuthModule,
    FormsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatSelectModule
    ],


  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
