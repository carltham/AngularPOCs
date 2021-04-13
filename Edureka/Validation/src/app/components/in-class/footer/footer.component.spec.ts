import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FooterComponent } from "./footer.component";
import { AppRoutingModule } from "src/app/routing/app-routing.module";
import { NavHandlerService } from "src/app/services/5-navigation/nav-handler.service";

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
    expect(buttons.length).toBe(2);
  });
});
