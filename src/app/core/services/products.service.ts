import { Injectable } from '@angular/core';
import { ProductModel } from '@models/products.model';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly PRODUCTS_KEY: string = 'products';

  products: ProductModel[] = [];


  addProduct(newProduct: ProductModel): void {
    this.products = this.localStoredProducts;
    this.products.push(newProduct);

    this.localStoredProducts = this.products;
  }

  loadProducts(nameToSearch?: string): void {
    this.products = nameToSearch
      ? this.localStoredProducts.filter(product => product.name.includes(nameToSearch))
      : this.localStoredProducts;
  }

  removeProduct(index: number): void {
    this.products.splice(index);

    this.localStoredProducts = this.products;
  }

  private get localStoredProducts(): ProductModel[] {
    return JSON.parse(localStorage.getItem(this.PRODUCTS_KEY) || '[]');
  }

  private set localStoredProducts(newProduct: ProductModel[]) {
    localStorage.setItem(this.PRODUCTS_KEY, JSON.stringify(newProduct));
  }
}
