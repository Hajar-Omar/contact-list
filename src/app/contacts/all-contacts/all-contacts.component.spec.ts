import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from "@angular/core/testing";

import { AllContactsComponent } from "./all-contacts.component";
import { TestingModule } from "src/app/testing/testing.module";
import { ContactsService } from "src/app/core/services/contacts/contacts.service";

import { IContactRes } from "src/app/core/models/contact";
import { of } from "rxjs/internal/observable/of";
import { delay } from "rxjs/operators";
import { contactsMock } from "src/app/testing/mock-data/contacts.mock";

describe("AllContactsComponent", () => {
  let component: AllContactsComponent;
  let fixture: ComponentFixture<AllContactsComponent>;
  let contactsService: ContactsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllContactsComponent],
      providers: [ContactsService],
      imports: [TestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    contactsService = TestBed.get(ContactsService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it('filter() to work correctly, when filter with "C" letter, first contact should be "Clarabelle"', () => {
    component.filter("C");
    if (component.filteredContacts.length > 0)
      expect(component.filteredContacts[0].first_name).toEqual("Clarabelle");
    else expect(component.filteredContacts[0]).toEqual(undefined);
  });

  it("resetAllContacts() to work correctly, when resetAllContacts invoked, filteredContacts should be  Empty", () => {
    component.resetAllContacts();
    expect(component.filteredContacts.length).toEqual(0);
  });

  it("loadContacts() to work correctly", fakeAsync(() => {
    const response: IContactRes = contactsMock;

    spyOn(contactsService, "getContacts").and.returnValue(
      of(response).pipe(delay(1))
    );

    // Trigger ngOnInit()
    fixture.detectChanges();
    expect(component.loading).toBeTruthy();
    expect(component.contacts.length).toEqual(0);

    // Act
    component.loadContacts();

    // Simulates the asynchronous passage of time
    tick(1);
    expect(component.loading).toBeFalsy();
    expect(component.filteredContacts).toEqual(response.result);
    expect(component.filteredContacts[0].first_name).toEqual("Roy");
  }));
});
