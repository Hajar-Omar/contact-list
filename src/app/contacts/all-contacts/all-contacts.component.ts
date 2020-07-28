import { Component, OnInit } from "@angular/core";
import { ContactsService } from "src/app/core/services/contacts/contacts.service";
import { IContact } from "src/app/core/models/contact";

@Component({
  selector: "app-all-contacts",
  templateUrl: "./all-contacts.component.html",
  styleUrls: ["./all-contacts.component.scss"],
})
export class AllContactsComponent implements OnInit {
  contacts: IContact[] = [];
  filteredContacts: IContact[] = [];

  lettersList: string[] = [];

  loading = true;

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.loadContacts();
  }

  // load all contacts list
  loadContacts() {
    this.loading = true;
    this.contactsService.getContacts().subscribe((d) => {
      this.loading = false;
      this.contacts = d.result;
      this.filteredContacts = d.result;

      // get unique letters from the list
      d.result.map((e, i, a) => {
        if (this.lettersList.indexOf(e.first_name[0]) == -1)
          this.lettersList.push(e.first_name[0]);
      });
      console.log(this.lettersList);
    });
  }

  // filter the contacts list by letter
  filter(letter: string) {
    this.filteredContacts = [];
    this.filteredContacts = this.contacts.filter((e) => {
      return e.first_name[0] == letter;
    });
  }

  // reset all contacts list after filtering
  resetAllContacts() {
    this.filteredContacts = [];
    this.contacts.map((e) => this.filteredContacts.push(e));
  }
}
