import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatBadgeModule, MatCardModule, MatDialogModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { BasketComponent } from '../basket/basket.component';
import { ShopComponent } from '../shop/shop.component';
import { SharedService } from './shared.service';

fdescribe('SharedService', () => {

  
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
  
  beforeEach(() => TestBed.configureTestingModule({}));

  /**
   * test to check if service is created
   */
  fit('should be created', () => {
    const service: SharedService = TestBed.get(SharedService);
    expect(service).toBeTruthy();
  });
});
