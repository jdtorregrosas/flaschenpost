import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabButtonComponent } from './tab-button/tab-button.component';
import { SortButtonComponent } from './sort-button/sort-button.component';
import { FilterToggleComponent } from './filter-toggle/filter-toggle.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { BottlesViewComponent } from './bottles-view/bottles-view.component';
import { BookComponent } from './icons/book/book.component';
import { BottleComponent } from './icons/bottle/bottle.component';
import { ApiService } from 'src/services/api.service';
import { ItemCardComponent } from './item-card/item-card.component';
import { SwitchComponent } from './switch/switch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AscendingComponent } from './icons/ascending/ascending.component';
import { DescendingComponent } from './icons/descending/descending.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabButtonComponent,
    SortButtonComponent,
    FilterToggleComponent,
    DetailsViewComponent,
    BottlesViewComponent,
    BookComponent,
    BottleComponent,
    ItemCardComponent,
    SwitchComponent,
    AscendingComponent,
    DescendingComponent,
  ],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
