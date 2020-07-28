import { TestBed } from "@angular/core/testing";

import { SearchService } from "./search.service";
import { TestingModule } from "src/app/testing/testing.module";

describe("SearchService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [TestingModule],
    })
  );

  it("should be created", () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();
  });
});
