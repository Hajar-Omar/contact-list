import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IContactRes } from "../../models/contact";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ContactsService {
  constructor(private httpClient: HttpClient) {}

  getContacts(): Observable<IContactRes> {
    return this.httpClient.get<IContactRes>(
      `${environment.baseUrl}contacts.json`
    );
  }
}
