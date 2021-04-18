import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/domain/5-navigation/shopping/product.ts";
import { NavHandlerService } from "src/app/services/5-navigation/nav-handler.service";
import { ProductsService } from "src/app/services/5-navigation/shopping/product/products-service.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product = this.productService.getEmptyObject();
  productId: number = -1;
  constructor(
    private navHandler: NavHandlerService,
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  goBack() {
    this.navHandler.navigate(["..", { id: this.product.id }], {
      relativeTo: this.route,
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((dataMap) => {
      let value = dataMap.get("id");
      let id = value ? parseInt(value) : -1;
      this.product = this.productService.getProduct(id);
    });
  }
}
