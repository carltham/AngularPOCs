import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppRoutingModule } from "src/app/routing/app-routing.module";
import { ServersService } from "src/app/services/in-class/servers.service";

import { ErrorComponent } from "./error.component";

describe("ErrorComponent", () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      declarations: [],
      providers: [ServersService],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ErrorComponent);
        component = fixture.componentInstance;
        fixture.autoDetectChanges();
      });
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
