import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ServersListComponent } from "./servers-list.component";
import { ServersService } from "../services/servers.service";

describe("ServersListComponent", () => {
  let component: ServersListComponent;
  let fixture: ComponentFixture<ServersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServersListComponent],
      imports: [RouterTestingModule],
      providers: [ServersService],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ServersListComponent);
        component = fixture.componentInstance;
        fixture.autoDetectChanges();
      });
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
