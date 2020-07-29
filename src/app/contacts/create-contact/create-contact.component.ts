import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { fadeInAnimation } from "src/app/core/animations/fadeIn.animation";

@Component({
  selector: "app-create-contact",
  templateUrl: "./create-contact.component.html",
  styleUrls: ["./create-contact.component.scss"],
  animations: [fadeInAnimation],
})
export class CreateContactComponent implements OnInit {
  newContactForm: FormGroup;
  submitted = false;

  is_mobile = /^01[0-9]{9}$/;
  is_text = /^[a-zA-Z\u0600-\u06FF,-][\sa-zA-Z\u0600-\u06FF,-]*$/;

  constructor(private formbuilder: FormBuilder) {
    this.newContactForm = this.formbuilder.group({
      name: new FormControl("", [
        Validators.required,
        Validators.pattern(this.is_text),
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [
        Validators.required,
        Validators.pattern(this.is_mobile),
      ]),
    });
  }

  ngOnInit() {}

  addContact() {
    this.submitted = true;

    if (this.newContactForm.invalid) return;

    // add contact
  }
}
