import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/domain/5-navigation/shopping/product.ts";
import { Header } from "src/app/domain/local/configuration/header";
import { NavHandlerService } from "src/app/services/5-navigation/nav-handler.service";
import { ProductsService } from "src/app/services/5-navigation/shopping/product/products-service.service";
import { URL_PATH } from "../../../support/url-paths";

@Component({
  selector: "app-product",
  templateUrl: "./shopping-product.component.html",
  styleUrls: ["./shopping-product.component.css"],
})
export class ShoppingProductComponent implements OnInit {
  selectedObject: Product = this.productsService.getEmptyObject();
  selectedObjectId: number = 0;
  selectedResponseId: number = -1;
  errorMessage: string = "";
  objectList: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private navHandler: NavHandlerService,
    private route: ActivatedRoute
  ) {}

  showDetails(id: number) {
    this.navHandler.navigate([URL_PATH.ID.replace(":id", "" + id)], {
      relativeTo: this.route,
    });
  }

  closeDetails(): void {
    this.selectedObject = this.productsService.getEmptyObject();
  }

  cloneOf(obj: Product): Product {
    return JSON.parse(JSON.stringify(obj));
  }

  ngOnInit(): void {
    this.objectList = this.productsService.list();

    this.route.paramMap.subscribe((dataMap) => {
      let value = dataMap.get("id");
      let id = value ? parseInt(value) : -1;
      this.selectedResponseId = id;
    });
  }

  get headers(): Header[] {
    let _headers = this.productsService.getHeaders();
    return _headers;
  }
}
