import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, FooterComponent],
      imports: [RouterTestingModule],
      providers: [],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        compiled = fixture.nativeElement;
        fixture.autoDetectChanges();
      });
  });

  it("should create the app", () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Welcome to the Employee List app !'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual("Welcome to the Employee List app !");
  });

  it("should render header", () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(".panel-heading span").textContent).toContain(
      "Welcome to the Employee List app !"
    );
  });
});
