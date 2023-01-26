import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface Article {
  id: number;
  shortDescription: string;
  price: number;
  unit: string;
  pricePerUnitText: string;
  image: string;
}

interface FlatArticle {
  id: number;
  shortDescription: string;
  price: number;
  unit: string;
  pricePerUnit: number;
  image: string;
}

export interface Product {
  id: number;
  brandName: string;
  name: string;
  articles: Article[];
}

export interface FlatProduct {
  id: number;
  brandName: string;
  name: string;
  article: FlatArticle;
}

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<FlatProduct[]> {
    return this.http
      .get<Product[]>(
        'https://flapotest.blob.core.windows.net/test/ProductData.json'
      )
      .pipe(
        map((products: Product[]): FlatProduct[] =>
          products.map(
            (product: Product): FlatProduct => ({
              ...product,
              article: {
                ...product.articles[0],
                pricePerUnit: parseFloat(
                  product.articles[0].pricePerUnitText
                    .replace(/[^0-9.,\n]+/g, '')
                    .replace(',', '.')
                ),
              },
            })
          )
        )
      );
  }
}
