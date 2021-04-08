import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/domain/5-navigation/shopping/product.ts";
import { ExternalEmployee } from "src/app/domain/com.restapiexample/employee-external";
import { Header } from "src/app/domain/local/configuration/header";
import { URL_PATH } from "src/app/routing/url-paths";
import { ExternalEmplService } from "src/app/services/4-services/external-employee-service";
import { NavHandlerService } from "src/app/services/5-navigation/nav-handler.service";
import { ProductsService } from "src/app/services/5-navigation/shopping/product/products-service.service";

@Component({
  selector: "app-product",
  templateUrl: "./shopping-product.component.html",
  styleUrls: ["./shopping-product.component.css"],
})
export class ShoppingProductComponent implements OnInit {
  selectedObject: Product = this.productsService.getEmptyObject();
  selectedObjectId: number = 0;
  errorMessage: string = "";
  objectList: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private navHandler: NavHandlerService,
    private activatedRoute: ActivatedRoute
  ) {}

  showDetails(id: number) {
    this.navHandler.navigate([URL_PATH.ID.replace(":id", "" + id)], {
      relativeTo: this.activatedRoute,
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
    console.log("this.objectList = t", this.objectList);
  }

  get headers(): Header[] {
    let _headers = this.productsService.getHeaders();
    return _headers;
  }
}
