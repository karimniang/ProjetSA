import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListeUserComponent } from './liste-user.component';

describe('ListeUserComponent', () => {
  let component: ListeUserComponent;
  let fixture: ComponentFixture<ListeUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
