import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {DonneeService} from '../donnee.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  mode = 1;
  contact: Object = new Contact();

  constructor( public newContactService: DonneeService) { }

  ngOnInit() {
  }

  saveContact() {
    this.newContactService.createContact(this.contact)
      .subscribe(data => {
        this.contact = data;
        this.mode = 2;
      } , err => {
        console.error(err);
      });
  }
}
