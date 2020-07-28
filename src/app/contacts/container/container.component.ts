import { Component, OnInit } from "@angular/core";
import { SearchService } from "src/app/core/services/search/search.service";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.scss"],
})
export class ContainerComponent implements OnInit {
  searchText: string;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.emitSearchText();
  }

  emitSearchText() {
    this.searchService.emitSearchText(this.searchText);
  }
}
