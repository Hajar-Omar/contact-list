import { Component, OnInit } from "@angular/core";
import { IContact } from "src/app/core/models/contact";
import { ContactsService } from "src/app/core/services/contacts/contacts.service";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { fadeInAnimation } from "src/app/core/animations/fadeIn.animation";

@Component({
  selector: "app-view-contact",
  templateUrl: "./view-contact.component.html",
  styleUrls: ["./view-contact.component.scss"],
  animations: [fadeInAnimation],
})
export class ViewContactComponent implements OnInit {
  contact: IContact;
  editContactForm: FormGroup;

  editMode = false;

  constructor(
    private contactsService: ContactsService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loadContactDetails();
  }

  loadContactDetails() {
    this.contactsService.getContacts().subscribe((d) => {
      this.contact = d.result.find(
        (e) => e.id == this.activatedRoute.snapshot.params["id"]
      );
      this.editContactForm = this.formBuilder.group({
        name: new FormControl(
          `${this.contact.first_name} ${this.contact.last_name}`
        ),
        email: new FormControl(this.contact.email),
        phone: new FormControl(this.contact.phone),
      });
    });
  }
}
