import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccueilAdminComponent } from './accueil-admin.component';

describe('AccueilAdminComponent', () => {
  let component: AccueilAdminComponent;
  let fixture: ComponentFixture<AccueilAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
