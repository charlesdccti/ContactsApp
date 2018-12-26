import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';
import {NewContactComponent} from './new-contact/new-contact.component';
import {NouveauComponentComponent} from './nouveau-component/nouveau-component.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent },
  {path: 'lesContacts', component: ContactsComponent},
  {path: 'new-contact', component: NouveauComponentComponent },
  {path: '', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
