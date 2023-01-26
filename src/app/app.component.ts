import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService, FlatProduct } from 'src/services/api.service';
import {
  sortFlatProductAscending,
  sortFlatProductDescending,
} from 'src/utils/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'flaschenpost';
  $tab = new BehaviorSubject<'detail' | 'bottles'>('detail');
  products: FlatProduct[] = [];
  originalProducts: FlatProduct[] = [];
  showExpensive = true;
  sortAscending = true;

  constructor(private apiService: ApiService) {
    this.apiService.getProducts().subscribe((products) => {
      this.originalProducts = products;
      this.products = products.sort(sortFlatProductAscending);
    });
  }

  toggleSortAscending() {
    this.sortAscending = !this.sortAscending;
    if (this.sortAscending) {
      this.products = this.products.sort(sortFlatProductAscending);
    } else {
      this.products = this.products.sort(sortFlatProductDescending);
    }
  }

  toggleFilterOutExpensiveBeer() {
    this.showExpensive = !this.showExpensive;
    if (this.showExpensive) {
      this.products = this.originalProducts;
    } else {
      this.products = this.products.filter(
        (product: FlatProduct) => product.article.pricePerUnit < 2
      );
    }
  }

  setTab(tabValue: 'detail' | 'bottles'): void {
    this.$tab.next(tabValue);
  }
}
