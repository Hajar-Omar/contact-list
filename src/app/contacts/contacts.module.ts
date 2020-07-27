import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContainerComponent } from './container/container.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ContainerComponent, AllContactsComponent, CreateContactComponent, ViewContactComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule
  ]
})
export class ContactsModule { }
