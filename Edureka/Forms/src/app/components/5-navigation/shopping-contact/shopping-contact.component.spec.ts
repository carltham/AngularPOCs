import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ShoppingContactComponent } from "./shopping-contact.component";

describe("ShoppingContactComponent", () => {
  let component: ShoppingContactComponent;
  let fixture: ComponentFixture<ShoppingContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingContactComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
