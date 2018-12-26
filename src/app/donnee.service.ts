import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import DateTimeFormat = Intl.DateTimeFormat;
import {Contact} from '../model/model.contact';


@Injectable({
  providedIn: 'root'
})
export class DonneeService {
  private _url  = 'http://localhost:8080/chercherContacts?mc=';

  constructor(private http: HttpClient) {}
  getContacts(motCle: string, page: number, size: number): Observable<any> {
    return this.http.get<Contact[]>(this._url + motCle + '&page=' + page + '&size=' + size);
  }
  deleteContact(id: number) {
    return this.http.delete<Contact[]>(this._url + id);
  }

  createContact(contact: Object): any {
    return this.http.post('http://localhost:8080/contacts', contact);
  }
  getContactById(id: number) {
    return this.http.get<Contact>(this._url + '/' + id);
  }
  updateContact(contact: Contact) {
    return this.http.put(this._url + '/' + contact.id, contact);
  }
}
