import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products.model';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products:Product[];
  selectedProducts:Product[]=[];
  constructor(private mySharedService: SharedService) { }

  ngOnInit() {
    this.getProducts();
  }

  /**
   * gets the list of products
   */
  getProducts() {
    this.mySharedService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  /**
   * 
   * @param product adds the selected product to cart
   */
  addToCart(product){
    this.selectedProducts.push(product);
    this.mySharedService.productsBs.next(this.selectedProducts);
    this.mySharedService.productsObsv.subscribe(res=>{
      if(res){
        this.selectedProducts = res;
      }
    })
  }

}
