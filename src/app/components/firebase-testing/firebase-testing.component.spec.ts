import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseTestingComponent } from './firebase-testing.component';

describe('FirebaseTestingComponent', () => {
  let component: FirebaseTestingComponent;
  let fixture: ComponentFixture<FirebaseTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
