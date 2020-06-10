import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


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

/** Materials Modules */
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventComponent, 
    ToolbarComponent,
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
  ],


  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
