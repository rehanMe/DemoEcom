import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Product } from "../models/products.model";
import { SharedService } from "../services/shared.service";

@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.scss"],
})
export class BasketComponent implements OnInit {
  selectedData: Product[];
  subTotals = [];
  value = [];
  total = 0;
  constructor(
    public thisDialogRef: MatDialogRef<BasketComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public sharedService: SharedService
  ) {}

  displayedColumns: string[] = [
    "name",
    "price",
    "noOfItems",
    "subTotal",
    "Remove",
  ];

  ngOnInit() {
    this.selectedData = this.dialogData["Data"];
  }

  onChange(value) {
    if (!value.viewModel) {
      this.value = [];
    }
  }

  /**
   *
   * @param product removes product from the cart
   */
  removeFromCart(product) {
    this.selectedData = this.selectedData.filter((x) => x.id != product.id);
    this.sharedService.productsBs.next(this.selectedData);
    this.getTotal();
  }

  /**
   * calulates total
   */
  getTotal() {
    this.total = 0;
    for (let i = 0; i < this.value.length; i++) {
      if (this.selectedData[i] && this.value[i]) {
        this.total = this.total + Number(this.selectedData[i].price) * Number(this.value[i]);
      }
    }
    return this.total;
  }
}
