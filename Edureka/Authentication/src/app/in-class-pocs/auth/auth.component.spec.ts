import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthComponent } from "./auth.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("AuthComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AuthComponent],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AuthComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Module8Demo1'`, () => {
    const fixture = TestBed.createComponent(AuthComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Module8Demo2");
  });
});
