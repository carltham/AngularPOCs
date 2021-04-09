import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppRoutingModule } from "src/app/routing/app-routing.module";

import { MyPageComponent } from "./mypage.component";

describe("MyPageComponent", () => {
  let component: MyPageComponent;
  let fixture: ComponentFixture<MyPageComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyPageComponent],
      imports: [AppRoutingModule],
      providers: [],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(MyPageComponent);
        component = fixture.componentInstance;
        compiled = fixture.nativeElement;
        fixture.autoDetectChanges();
      });
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
