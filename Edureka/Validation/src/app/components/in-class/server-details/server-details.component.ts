import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data, ParamMap } from "@angular/router";
import { Server } from "src/app/domain/in-class/server";
import { NavHandlerService } from "src/app/services/5-navigation/nav-handler.service";
import { ServersService } from "src/app/services/in-class/servers.service";

@Component({
  selector: "app-server",
  templateUrl: "./server-details.component.html",
  styleUrls: ["./server-details.component.css"],
})
export class ServerDetailsComponent implements OnInit {
  server: Server = this.cleanObject();

  constructor(
    private navHandler: NavHandlerService,
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  onEdit() {
    this.navHandler.navigate(["edit"], {
      relativeTo: this.route,
      queryParamsHandling: "preserve",
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let value = params.get("id");
      if (value) {
        let id = parseInt(value);
        let foundServer = this.serversService.getServer(id);
        this.server = foundServer ? foundServer : this.cleanObject();
      }
    });
  }

  cleanObject() {
    return { id: -1, name: "", status: "" };
  }
}
