import { TestBed } from "@angular/core/testing";

import { ContactsService } from "./contacts.service";
import { TestingModule } from "src/app/testing/testing.module";
import { HttpTestingController } from "@angular/common/http/testing";
import { contactsMock } from "src/app/testing/mock-data/contacts.mock";

describe("ContactsService", () => {
  let service: ContactsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [TestingModule],
    })
  );

  beforeEach(() => {
    service = TestBed.get(ContactsService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  // verify that there are no pending HTTP requests.
  afterEach(() => {
    httpTestingController.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("getContacts() to return exact data", () => {
    service.getContacts().subscribe((d) => {
      expect(d.result[0].first_name).toEqual("Roy");
      expect(d.result[0].last_name).toEqual("Huels");
    });

    const res = httpTestingController.expectOne("assets/data/contacts.json");
    expect(res.request.method).toEqual("GET");
    res.flush(contactsMock);
  });
});
