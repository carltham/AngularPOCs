import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ServerDetailsComponent } from "./server-details.component";
import { AppRoutingModule } from "../../../routing/app-routing.module";
import { ServersService } from "src/app/services/in-class/servers.service";

describe("ServerDetailsComponent", () => {
  let component: ServerDetailsComponent;
  let fixture: ComponentFixture<ServerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule],
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
