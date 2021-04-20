import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ServerDetailsComponent } from "./server-details.component";
import { ServersService } from "../services/servers.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ServerDetailsComponent", () => {
  let component: ServerDetailsComponent;
  let fixture: ComponentFixture<ServerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [],
      providers: [ServersService],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ServerDetailsComponent);
        component = fixture.componentInstance;
        fixture.autoDetectChanges();
      });
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
