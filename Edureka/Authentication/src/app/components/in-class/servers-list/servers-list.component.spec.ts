import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppRoutingModule } from "src/app/routing/app-routing.module";
import { ServersService } from "src/app/services/in-class/servers.service";

import { ServersListComponent } from "./servers-list.component";

describe("ServersListComponent", () => {
  let component: ServersListComponent;
  let fixture: ComponentFixture<ServersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServersListComponent],
      imports: [AppRoutingModule],
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
