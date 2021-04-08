import { Component, OnInit } from "@angular/core";
import { Server } from "src/app/domain/in-class/server";
import { ServersService } from "src/app/services/in-class/servers.service";

@Component({
  selector: "app-servers",
  templateUrl: "./servers-list.component.html",
  styleUrls: ["./servers-list.component.css"],
})
export class ServersListComponent implements OnInit {
  servers: Server[] = [];

  constructor(private serversService: ServersService) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {}
}
