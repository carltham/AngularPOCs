import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ServerEditorComponent } from "./server-editor.component";
import { ServersService } from "../services/servers.service";

describe("ServerEditorComponent", () => {
  let component: ServerEditorComponent;
  let fixture: ComponentFixture<ServerEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerEditorComponent],
      imports: [RouterTestingModule],
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
