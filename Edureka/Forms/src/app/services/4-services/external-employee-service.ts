import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Header } from "src/app/domain/local/configuration/header";
import { Config } from "src/app/support/config";
import { ExternalEmployee } from "src/app/domain/com.restapiexample/employee-external";

@Injectable({
  providedIn: "root",
})
export class ExternalEmplService {
  constructor(private http: HttpClient) {}

  getHeaders() {
    const headers: Header[] = [
      { number: 0, width: 15, text: "ID" },
      { number: 1, width: 12, text: "Name" },
      { number: 2, width: 13, text: "Salary" },
      { number: 3, width: -1, text: "Age" },
      { number: 4, width: -1, text: "Image URI" },
    ];
    headers.forEach((header) => {
      if (header.width < 0) {
        header.width = (1 / headers.length) * 100;
      }
    });

    return headers;
  }

  list(): Observable<ExternalEmployee> {
    let url = Config.com_restapiexample;
    return this.http.get<ExternalEmployee>(url);
  }
}
