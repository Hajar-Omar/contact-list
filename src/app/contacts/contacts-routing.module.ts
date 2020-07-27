import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { CreateContactComponent } from './create-contact/create-contact.component';


const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'all-contacts',
        component: AllContactsComponent
      },
      {
        path: 'view-contact/:id',
        component: ViewContactComponent
      },
      {
        path: 'create-contact',
        component: CreateContactComponent
      },
      {
        path: "",
        redirectTo: "all-contacts",
        pathMatch: "full"
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
