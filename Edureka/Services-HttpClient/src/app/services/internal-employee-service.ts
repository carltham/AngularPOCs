import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Header } from "../domain/Header";
import { Config } from "../support/config";
import { InternalEmployee } from "../domain/employee-internal";

@Injectable({
  providedIn: "root",
})
export class InternalEmplService {
  constructor(private http: HttpClient) {}

  getHeaders() {
    const headers: Header[] = [
      { number: 0, width: 5, text: "ID" },
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
  fetchNew(): Observable<InternalEmployee> {
    let url = Config.baseUrl + Config.new;
    return this.http.get<InternalEmployee>(url);
  }
  update(newEmployee: InternalEmployee): Observable<any> {
    let url = Config.baseUrl + Config.save;
    return this.http.post<InternalEmployee>(url, newEmployee);
  }
}
