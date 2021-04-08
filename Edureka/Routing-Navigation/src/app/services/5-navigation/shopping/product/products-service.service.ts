import { Injectable } from "@angular/core";
import { Product } from "src/app/domain/5-navigation/shopping/product.ts";
import { Header } from "src/app/domain/local/configuration/header";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor() {}

  getHeaders() {
    const headers: Header[] = [
      { number: 0, width: -1, text: "ID" },
      { number: 1, width: 35, text: "Name" },
      { number: 2, width: 15, text: "Price" },
      { number: 3, width: -1, text: "Details" },
    ];
    headers.forEach((header) => {
      if (header.width < 0) {
        header.width = (1 / headers.length) * 100;
      }
    });

    return headers;
  }

  public getProduct(id: number) {
    let foundObject = this.list().find((obj) => {
      return obj.id === id;
    });

    return foundObject ? foundObject : this.getEmptyObject();
  }

  list(): Product[] {
    const products: Product[] = [
      {
        id: 1,
        name: "Samsung Galaxy S21 Ultra (128GB) Phantom Black",
        description:
          "Galaxy S21 Ultra - mobilen som överträffar verkligheten<br>",
        details:
          '6,8" 120 Hz Dynamic AMOLED-skärm' +
          "12 GB RAM + 128 GB lagring" +
          "108 mp quad-kamera med 100x zoom",
        imageUrl:
          "assets/images/samsung-x-galaxy-s21-ultra-128gb-phantom-black(X1016256)_412217_7_Normal_Large.webp",
        price: 12590,
      },
      {
        id: 2,
        name: "Xiaomi Mi 10T Pro 8+256GB Lunar Silver",
        description:
          "Fullspäckad Android-mobil med högupplöst trippelkamera<br>" +
          "Xiaomi Mi 10T Pro 8+256GB 5G Lunar Silver<br>",
        details:
          '6,67" FHD-skärm 144Hz' +
          "8 GB RAM + 256 GB lagring" +
          "Trippelkamera med 108 megapixlar",
        imageUrl:
          "assets/images/xiaomi-x-mi-10t-pro-8256gb-5g-lunar-silver(X1014972)_399673_1_Normal_Large.webp",
        price: 5190,
      },
      {
        id: 3,
        name: "Motorola Moto E6i 2+32 GB Meteor Grey",
        description:
          "Moto E6i med snabb kamera och strömsparande skärm<br>" +
          "Motorola Moto E6i 2+32 GB Meteor Gre<br>",
        details:
          '6,1" HD+-skärm' +
          "2 GB RAM + 32 GB lagring" +
          "Kamera med ultrasnabbt fokus",
        imageUrl:
          "assets/images/motorola-x-moto-e6i-232-gb-meteor-grey(X1016357)_424048_1_Normal_Large.webp",
        price: 889,
      },
      {
        id: 4,
        name: "Apple iPhone SE 64GB Black (2020)",
        description: "iPhone SE 64 GB - Liten på utsidan. Stor på insidan.",
        details:
          "4,7-tums Retina HD-skärm" +
          "12 MP-vidvinkelkamera" +
          "Väggladdare och hörlurar ingår ej",
        imageUrl:
          "assets/images/apple-x-iphone-se-64gb-black-2020(X1015889)_409006_3_Normal_Large.webp",
        price: 4390,
      },
      {
        id: 5,
        name: "Apple iPhone 12 Pro Max 256GB Pacific Blue",
        description: "Världens mest avancerade iPhone.",
        details:
          "6,7-tums Super Retina XDR-skärm" +
          "LiDAR-teknik för bättre AR-upplevelser" +
          "Proffskamerasystem med 12 MP" +
          "5G för ultrasnabb nedladdning" +
          "Ceramic Shield",
        imageUrl:
          "assets/images/apple-x-iphone-12-pro-max-256gb-pacific-blue(X1015100)_400774_2_Normal_Large.webp",
        price: 13490,
      },
      {
        id: 6,
        name: "Doro 6041 Black",
        description: "Användarvänlig mobiltelefon med högt och tydligt ljud",
        details:
          'Lättavläst 2,8" skärm' +
          "Vikbar design" +
          "Extra högt och tydligt ljud" +
          "Trygghetsknapp på baksidan",
        imageUrl:
          "assets/images/doro-x-6041-black(X1011924)_376182_1_Normal_Large.webp",
        price: 1090,
      },
    ];
    return products;
  }

  getEmptyObject(): Product {
    return {
      id: -1,
      name: "",
      description: "",
      details: "",
      imageUrl: "",
      price: -1,
    };
  }
}
