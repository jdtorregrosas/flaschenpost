import { FlatProduct } from 'src/services/api.service';

export const sortFlatProductAscending = (a: FlatProduct, b: FlatProduct) =>
  a.article.pricePerUnit - b.article.pricePerUnit;

export const sortFlatProductDescending = (a: FlatProduct, b: FlatProduct) =>
  b.article.pricePerUnit - a.article.pricePerUnit;
