import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import DateTimeFormat = Intl.DateTimeFormat;
import {DonneeService} from '../donnee.service';
import {getResponseURL} from '@angular/http/src/http_utils';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public contacts: any;
  public motCle = '';
  public previousPage = 0;
  public currentPage = 0;
  public size = 5;
  pages: any;
  public lesElements = 0;

  constructor(private ContactService: DonneeService ) {}

  ngOnInit() {
  }
  doSearch() {
      this.ContactService.getContacts(this.motCle, this.currentPage, this.size)
        .subscribe(data => {
          this.contacts = data;
          this.pages = new Array<number>(data.totalPages);
          this.lesElements = data.totalPages;
        } , err => {
          console.log(err);
        });
    }
    chercher() {
    this.doSearch();
    }

  gotoPage(i: number) {
    this.currentPage = i - 1;
    this.doSearch();
  }
}
