import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';


describe('ProductsService', () => {
  let service: ProductsService;
  let localStore: { [key: string]: string };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);

    localStore = {};

    spyOn(window.localStorage, 'getItem').and.callFake(key => key in localStore ? localStore[key] : null);
    spyOn(window.localStorage, 'setItem').and.callFake((key, value) => (localStore[key] = value + ''));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('PRODUCTS_KEY need to be equal to "products"', () => {
    expect(service.PRODUCTS_KEY).toEqual('products');
  });

  it('should load all products', () => {
    service.addProduct({
      name: 'test a',
      price: 1.99,
      quantity: 1,
    });
    service.loadProducts();

    expect(window.localStorage.getItem).toHaveBeenCalled();

    expect(service.products)
      .withContext('should return one value')
      .toEqual([
        {
          name: 'test a',
          price: 1.99,
          quantity: 1,
        }
      ]);
  });

  it('should search a product', () => {
    service.addProduct({
      name: 'test a',
      price: 1.99,
      quantity: 1,
    });
    service.addProduct({
      name: 'test b',
      price: 1.99,
      quantity: 1,
    });
    service.loadProducts('b');

    expect(window.localStorage.getItem).toHaveBeenCalled();

    expect(service.products)
      .withContext('should return one value and must have name "test b"')
      .toEqual([
        {
          name: 'test b',
          price: 1.99,
          quantity: 1,
        }
      ]);
  });

  it('should search a nonexistent product', () => {
    service.addProduct({
      name: 'test a',
      price: 1.99,
      quantity: 1,
    });
    service.loadProducts('b');

    expect(window.localStorage.getItem).toHaveBeenCalled();

    expect(service.products)
      .withContext('should return a empty array')
      .toEqual([]);
  });

  it('should add a product', () => {
    expect(service.products)
      .withContext('should return a empty array')
      .toEqual([]);

    service.addProduct({
      name: 'test a',
      price: 1.99,
      quantity: 1,
    });

    expect(window.localStorage.setItem).toHaveBeenCalled();

    expect(service.products)
      .withContext('should return one value')
      .toEqual([
        {
          name: 'test a',
          price: 1.99,
          quantity: 1,
        }
      ]);
  });

  it('should remove a product', () => {
    service.addProduct({
      name: 'test a',
      price: 1.99,
      quantity: 1,
    });

    expect(service.products)
      .withContext('should return one value')
      .toEqual([
        {
          name: 'test a',
          price: 1.99,
          quantity: 1,
        }
      ]);

    service.removeProduct(0);

    expect(service.products)
      .withContext('should return a empty array')
      .toEqual([]);
  });
});
