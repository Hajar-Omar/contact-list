import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  show: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe((d) => {
      if (d instanceof NavigationEnd) {
        if (!d["url"].includes("create-contact")) this.show = true;
        else this.show = false;
      }
    });
  }

  ngOnInit() {}
}
