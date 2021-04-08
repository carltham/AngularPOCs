import { HttpClient, HttpClientModule } from "@angular/common/http";

import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
  waitForAsync,
} from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { HttpClientComponent } from "src/app/components/4-services/http-client/http-client.component";
import { ExternalEmplService } from "src/app/services/4-services/external-employee-service";

let response: any;
let httpClient: HttpClient;

describe("HttpClientComponent", () => {
  let component: HttpClientComponent;
  let fixture: ComponentFixture<HttpClientComponent>;
  let service: ExternalEmplService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, HttpClientModule],
        declarations: [HttpClientComponent],
        providers: [],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(HttpClientComponent);
          component = fixture.componentInstance;
          fixture.autoDetectChanges();
          httpClient = TestBed.inject(HttpClient);
          let employee = {
            id: 2100,
            employee_name: "TheCodeBuzz",
            employee_age: 53,
            employee_salary: 500,
            profile_image: "tttt",
          };
          response = { data: [employee] };
        });
    })
  );

  it("integration : should have more than 1 row ", () => {
    let tableRows = fixture.nativeElement.querySelectorAll("tr");
    expect(tableRows.length > 0).toBeTruthy();
    let buttons = fixture.nativeElement.querySelectorAll("button");

    expect(buttons.length).toBe(tableRows.length - 1);

    tableRows[0].click();
    expect(component.selectedEmployee).toEqual(component.cleanEmployee());
    fixture.detectChanges();
    buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons.length).toBe(tableRows.length - 1);
  });
});
