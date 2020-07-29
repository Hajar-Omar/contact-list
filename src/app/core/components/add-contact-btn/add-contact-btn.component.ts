import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-add-contact-btn",
  templateUrl: "./add-contact-btn.component.html",
  styleUrls: ["./add-contact-btn.component.scss"],
})
export class AddContactBtnComponent implements OnInit {
  show: boolean;

  constructor(private router: Router) {
    // ahndle show/hide add new contact button in all views except [add new contact] page
    this.router.events.subscribe((d) => {
      if (d instanceof NavigationEnd) {
        if (!d["url"].includes("create-contact")) this.show = true;
        else this.show = false;
      }
    });
  }

  ngOnInit() {}
}
