import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppRoutingModule } from "src/app/routing/app-routing.module";
import { ServersService } from "src/app/services/in-class/servers.service";
import { ServerEditorComponent } from "./server-editor.component";

describe("ServerEditorComponent", () => {
  let component: ServerEditorComponent;
  let fixture: ComponentFixture<ServerEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerEditorComponent],
      imports: [AppRoutingModule],
      providers: [ServersService],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ServerEditorComponent);
        component = fixture.componentInstance;
        fixture.autoDetectChanges();
      });
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
