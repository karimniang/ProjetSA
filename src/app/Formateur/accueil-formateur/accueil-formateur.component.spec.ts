import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccueilFormateurComponent } from './accueil-formateur.component';

describe('AccueilFormateurComponent', () => {
  let component: AccueilFormateurComponent;
  let fixture: ComponentFixture<AccueilFormateurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
