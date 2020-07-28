import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  searchTextObs = new BehaviorSubject<string>("");

  constructor() {}

  emitSearchText(searchText: string) {
    this.searchTextObs.next(searchText);
  }
}
