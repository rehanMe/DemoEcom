import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatBadgeModule, MatCardModule, MatDialogModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Button } from 'protractor';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { BasketComponent } from '../basket/basket.component';
import { SharedService } from '../services/shared.service';

import { ShopComponent } from './shop.component';

fdescribe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

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
        SharedService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    /**
     * test to check if component is created
     */
    fit('should create the component', () => {
      expect(component).toBeTruthy();
    });

    /**
     * Test to check if getProducts is called when initialized (ngOninit)
     */
    fit("ngOnInit should call the getProducts", () => {
      const componentSpy = spyOn(component, "getProducts");
      component.ngOnInit();
      expect(componentSpy).toHaveBeenCalled();
    });

    /**
     * Test to check if getProducts calls the getAllProducts method in sharedservice
     */
    fit('getProducts should call getAllProducts method in sharedservice', inject([SharedService],(sharedService: SharedService) => {
      // setting up spies
      const sharedServiceSpy = spyOn(sharedService, 'getAllProducts').and.callThrough();
      const componentSpy = spyOn(component, 'getProducts').and.callThrough();
    
      // expect functions to not have been called before calling
      expect(sharedServiceSpy).not.toHaveBeenCalled();
      expect(componentSpy).not.toHaveBeenCalled();
    
      //calling getProducts method
      component.getProducts();
    
      //exoecting spies to have been called
      expect(sharedServiceSpy).toHaveBeenCalledTimes(1);
      expect(componentSpy).toHaveBeenCalledTimes(1);
    }));

    /**
     * Test to check if addToCart pushes product in array and updates the behaviour subject
     */
    fit("addToCart pushes product in selectedProducts array and updates the behaviour subject", inject([SharedService],(sharedService: SharedService)  => {
      const requestValue =  {
        "id": 1,
        "name": "Test Product",
        "description": "Lorem Ipsum",
        "price": "100.00",
        "quantity": "10",
        "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
      }
      const responseValue = [{
        "id": 1,
        "name": "Test Product",
        "description": "Lorem Ipsum",
        "price": "100.00",
        "quantity": "10",
        "image": "http://truth-events.com/wp-content/uploads/2019/09/dummy.jpg"
      }]
      //calling addToCart function
      component.addToCart(requestValue)
      //expecting selectedProducts and productsBs value to be equal to the responseValue
      expect(component.selectedProducts).toEqual(jasmine.arrayContaining(responseValue));
      expect(sharedService.productsBs.value).toEqual(jasmine.arrayContaining(responseValue));
    }));
});
