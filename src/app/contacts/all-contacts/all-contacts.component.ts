import { Component, OnInit } from "@angular/core";
import { ContactsService } from "src/app/core/services/contacts/contacts.service";
import { IContact } from "src/app/core/models/contact";
import { SearchService } from "src/app/core/services/search/search.service";
import { fadeInAnimation } from "src/app/core/animations/fadeIn.animation";

@Component({
  selector: "app-all-contacts",
  templateUrl: "./all-contacts.component.html",
  styleUrls: ["./all-contacts.component.scss"],
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { "[@fadeInAnimation]": "" },
})
export class AllContactsComponent implements OnInit {
  contacts: IContact[] = [];
  filteredContacts: IContact[] = [];

  lettersList: string[] = [];

  loading = true;

  searchText: string = "";

  selectedLetter: string; // to handle ngclass active filter letter

  constructor(
    private contactsService: ContactsService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.loadContacts();
    this.search();
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
      this.lettersList.sort();
    });
  }

  // filter the contacts list by letter
  filter(letter: string) {
    this.filteredContacts = [];
    this.filteredContacts = this.contacts.filter(
      (e) => e.first_name[0] == letter
    );
  }

  // reset all contacts list after filtering
  resetAllContacts() {
    this.filteredContacts = [];
    this.contacts.map((e) => this.filteredContacts.push(e));
  }

  // search in the contacts list
  search() {
    this.searchService.searchTextObs.subscribe((d) => (this.searchText = d));
  }
}
