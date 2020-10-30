import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";
import { BasketComponent } from "./basket/basket.component";
import { Product } from "./models/products.model";
import { SharedService } from "./services/shared.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  selectedListCount = 0;
  selectedList: Product[];
  constructor(sharedService: SharedService, private dialog: MatDialog) {
    sharedService.productsObsv.subscribe((res) => {
      if (res) {
        this.selectedList = res;
        this.selectedListCount = res.length;
      }
    });
  }
  
  /**
   * opens the mat-dialog with basket component and selected products list
   */
  openBasket() {
    let dialogRef = this.dialog.open(BasketComponent, {
      data: {
        Data: this.selectedList,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.selectedList = result.selectedProducts;
      }
    });
  }
}
