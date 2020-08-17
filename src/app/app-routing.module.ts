import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './components/events/event/event.component';
import { EventEditComponent } from './components/events/event-edit/event-edit.component';

import { AddContactComponent } from './components/addContact/addContact.component';
import { CreateGroupComponent } from './components/createGroup/createGroup.component';
import { GroupsContactsViewComponent } from './components/groupsContactsView/groupsContactsView.component';
import { EventViewComponent } from './components/eventView/eventView.component';
import { MainpageComponent } from './components/mainpage/mainpage.component'
import { GroupViewComponent } from './components/groupView/groupView.component'
import { NewPollComponent } from './components/newPoll/newPoll.component';

const routes: Routes = [
    {path: '', component: MainpageComponent},
    {path: 'event', component: EventComponent},
    {path: 'editEvent', component:EventEditComponent},
    {path: 'addContact', component: AddContactComponent},
    {path: 'createGroup', component: CreateGroupComponent},
    {path: 'groupsContactsView', component: GroupsContactsViewComponent},
    {path: 'eventView', component: EventViewComponent},
    {path: 'groupView', component:GroupViewComponent},
    {path: 'newPoll', component:NewPollComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}