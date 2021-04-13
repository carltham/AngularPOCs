import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs";

import { Server } from "src/app/domain/in-class/server";
import { NavHandlerService } from "src/app/services/5-navigation/nav-handler.service";
import { CanComponentDeactivate } from "src/app/services/in-class/component-deactivation-guard.service";
import { ServersService } from "src/app/services/in-class/servers.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./server-editor.component.html",
  styleUrls: ["./server-editor.component.css"],
})
export class ServerEditorComponent implements OnInit, CanComponentDeactivate {
  server: Server = this.cleanObject();
  serverID: number = -1;
  serverName = "";
  serverStatus = "";
  editAllowed = false;
  changesSaved = false;

  constructor(
    private navHandler: NavHandlerService,
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.navHandler.navigate(["../"], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.editAllowed) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm("Do you want to discard your changes?");
    }
    return true;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.editAllowed = queryParams["editAllowed"] === "1" ? true : false;
    });
    this.route.fragment.subscribe();
    this.serverID = +this.route.snapshot.params["id"];
    this.server = this.serversService.getServer(this.serverID);
    this.server = this.server ? this.server : this.cleanObject();
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.serverID = queryParams["id"];
    });
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  cleanObject() {
    return { id: -1, name: "", status: "" };
  }
}
