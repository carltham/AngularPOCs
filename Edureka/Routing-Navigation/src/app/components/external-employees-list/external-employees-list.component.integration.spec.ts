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
import { ExternalEmployee } from "src/app/domain/com.restapiexample/employee-external";
import { ExtEmplListComponent } from "src/app/components/external-employees-list/external-employees-list.component";
import { ExternalEmplService } from "src/app/services/external-employee-service";
import { Config } from "src/app/support/config";

let response: any;
let httpClient: HttpClient;

describe("ExtEmplListComponent", () => {
  let component: ExtEmplListComponent;
  let fixture: ComponentFixture<ExtEmplListComponent>;
  let service: ExternalEmplService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, HttpClientModule],
        declarations: [ExtEmplListComponent],
        providers: [],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(ExtEmplListComponent);
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
