import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatBadgeModule, MatCardModule, MatDialogModule, MatTableModule, MatTooltipModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { Product } from '../models/products.model';
import { SharedService } from '../services/shared.service';
import { ShopComponent } from '../shop/shop.component';

import { BasketComponent } from './basket.component';

fdescribe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [  BrowserModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatBadgeModule,
        MatCardModule,
        FlexLayoutModule,
        MatDialogModule,
        MatTableModule,
        MatTooltipModule,
        FormsModule ],
      declarations: [ AppComponent, ShopComponent,BasketComponent ],
      providers: [
        SharedService,
        { provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

     /**
     * Test to check if removeFromCart removes product from the behaviour subject
     */
    fit("removeFromCart removes product from the behaviour subject", inject([SharedService],(sharedService: SharedService)  => {
      let arrayValue: Product[];
      arrayValue = [{
        "id": 1,
        "name": "Test Product",
        "description": "Lorem Ipsum",
        "price": "100.00",
        "quantity": "10",
        "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
      },
      {
        "id": 2,
        "name": "Test Product two",
        "description": "Lorem Ipsum",
        "price": "200.00",
        "quantity": "10",
        "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
      }]
      let requestValue: Product;
      requestValue = {
        "id": 1,
        "name": "Test Product",
        "description": "Lorem Ipsum",
        "price": "100.00",
        "quantity": "10",
        "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
      }
      //calling removeFromCart function
      component.selectedData = arrayValue;
      component.removeFromCart(requestValue)
      //expecting productsBs value to be not contain the removed product
      expect(sharedService.productsBs.value).not.toContain(jasmine.objectContaining(requestValue));
    }));
});
