import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllContactsComponent } from './all-contacts.component';
import { TestingModule } from 'src/app/testing/testing.module';

describe('AllContactsComponent', () => {
  let component: AllContactsComponent;
  let fixture: ComponentFixture<AllContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllContactsComponent],
      imports: [TestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
