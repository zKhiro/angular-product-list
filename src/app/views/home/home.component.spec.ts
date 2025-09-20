import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CardProductModule, InputWrapperModule, ProductFormModule } from '@components';
import { ProductsService } from '@services';

import { HomeComponent } from './home.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let localStore: { [key: string]: string };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        ReactiveFormsModule,
        CardProductModule,
        InputWrapperModule,
        ProductFormModule,
      ],
      providers: [ProductsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.productsService = TestBed.inject(ProductsService);
    localStore = {};

    fixture.detectChanges();

    spyOn(window.localStorage, 'getItem').and.callFake(key => key in localStore ? localStore[key] : null);
    spyOn(window.localStorage, 'setItem').and.callFake((key, value) => (localStore[key] = value + ''));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product list', () => {
    component.productsService.addProduct({name: 'test a', price: 1.99, quantity: 1});
    fixture.detectChanges();

    const productCardListEl: HTMLElement = fixture.nativeElement.querySelector('[data-testid=product-card-list]');

    expect(productCardListEl).toBeTruthy();
    expect(Array.of(productCardListEl.children)).toHaveSize(1);
  });

  it('should NOT render product list', () => {
    component.productsService.loadProducts();
    fixture.detectChanges();

    const productCardListEl: HTMLElement = fixture.nativeElement.querySelector('[data-testid=product-card-list]');

    expect(productCardListEl).toBeFalsy();
  });
});
