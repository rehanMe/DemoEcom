import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SharedService } from './services/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule,MatIconModule,MatBadgeModule,
        MatCardModule,MatDialogModule,
         MatTableModule, 
         MatTooltipModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ShopComponent } from './shop/shop.component';
import { BasketComponent } from './basket/basket.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent, ShopComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
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
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
