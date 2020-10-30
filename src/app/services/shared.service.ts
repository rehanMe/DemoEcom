import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Product } from "../models/products.model";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  productsBs = new BehaviorSubject<Product[]>(null);
  productsObsv = this.productsBs.asObservable();
  getProductsUrl = "https://www.mocky.io/v2/5eda4003330000740079ea60";
  constructor(private http: HttpClient) {}

  /**
   * gets all products data from getProductsUrl
   */
  getAllProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.getProductsUrl)
      .pipe(map((res) => res["data"], catchError(this.handleError)));
  }

  private handleError(error: Response | any) {
    return throwError(error || "server error");
  }
}
