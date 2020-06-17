import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './components/events/event/event.component';
import { AddContactComponent } from './components/addContact/addContact.component';
import { CreateGroupComponent } from './components/createGroup/createGroup.component';
import { GroupsContactsViewComponent } from './components/groupsContactsView/groupsContactsView.component';
import { CreateEventComponent } from './components/createEvent/createEvent.component';
import { EventViewComponent } from './components/eventView/eventView.component';

const routes: Routes = [
    {path: 'event', component: EventComponent},
    {path: 'addContact', component: AddContactComponent},
    {path: 'createGroup', component: CreateGroupComponent},
    {path: 'groupsContactsView', component: GroupsContactsViewComponent},
    {path: 'createEvent', component: CreateEventComponent},
    {path: 'eventView', component: EventViewComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}