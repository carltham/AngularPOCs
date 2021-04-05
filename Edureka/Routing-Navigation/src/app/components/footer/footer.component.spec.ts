import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NavHandlerService } from "src/app/services/nav-handler.service";
import { Router, RoutesRecognized } from "@angular/router";

import { FooterComponent } from "./footer.component";
import { AppRoutingModule } from "src/app/routing/app-routing.module";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [],
      providers: [NavHandlerService],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        compiled = fixture.nativeElement;
        fixture.autoDetectChanges();
      });
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render footer", () => {
    expect(compiled.querySelector("#copyright").textContent).toContain(
      "®Copyright Jeesof LTD - contact@jeesoft.uk"
    );
    let buttons: any[] = compiled.querySelectorAll("button");
    console.log("buttons = ", buttons);
    expect(buttons.length).toBe(2);
  });
});
