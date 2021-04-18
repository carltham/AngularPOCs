import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InClassHomeComponent } from './in-class-home.component';

describe('InClassHomeComponent', () => {
  let component: InClassHomeComponent;
  let fixture: ComponentFixture<InClassHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InClassHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InClassHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
