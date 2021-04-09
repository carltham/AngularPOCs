import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InClassComponent } from './in-class.component';

describe('InClassComponent', () => {
  let component: InClassComponent;
  let fixture: ComponentFixture<InClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
