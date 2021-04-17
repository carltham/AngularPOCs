import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "src/app/routing/app-routing.module";
import { ExternalEmplService } from "src/app/services/4-services/external-employee-service";
import { NavHandlerService } from "src/app/services/5-navigation/nav-handler.service";
import { ProductsService } from "src/app/services/5-navigation/shopping/product/products-service.service";

import { ShoppingProductComponent } from "./shopping-product.component";

describe("ShoppingProductComponent", () => {
  let component: ShoppingProductComponent;
  let fixture: ComponentFixture<ShoppingProductComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule, AppRoutingModule],
        declarations: [ShoppingProductComponent],
        providers: [ExternalEmplService, ProductsService, NavHandlerService],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(ShoppingProductComponent);
          component = fixture.componentInstance;
          fixture.autoDetectChanges();
        });
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
