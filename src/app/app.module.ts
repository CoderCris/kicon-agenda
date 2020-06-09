import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { config } from './services/utils/firebase';
import { EventsComponent } from './components/events/events.component';
import { EventComponent } from './components/events/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireAnalyticsModule,
    AngularFireModule,
    AngularFireAuthModule,
    FormsModule
  ],


  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
