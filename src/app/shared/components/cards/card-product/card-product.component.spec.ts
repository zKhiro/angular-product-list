import { DEFAULT_CURRENCY_CODE } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductsService } from '@services';

import { CardProductComponent } from './card-product.component';


describe('CardProductComponent', () => {
  let component: CardProductComponent;
  let fixture: ComponentFixture<CardProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardProductComponent],
      providers: [
        ProductsService,
        { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product', () => {
    component.index = 0;
    component.name = 'test-name';
    component.price = 1.99;
    component.quantity = 1;

    fixture.detectChanges();

    const nameEl = fixture.nativeElement.querySelector('[data-testid=name]')?.textContent;
    const priceEl = fixture.nativeElement.querySelector('[data-testid=price]')?.textContent.trim();
    const quantityEl = fixture.nativeElement.querySelector('[data-testid=quantity]')?.textContent;

    expect(component.index)
      .withContext('index should be equal to "0"')
      .toEqual(0)

    expect(nameEl)
      .withContext('name should be equal to "test-name"')
      .toEqual('test-name');

    expect(priceEl)
      .withContext('price should be equal to "R$ 1,99"')
      .toEqual('R$ 1,99');

    expect(quantityEl)
      .withContext('quantity should be equal to "1"')
      .toEqual('1');
  });

  it('should call removeProduct when click on remove button', () => {
    spyOn(component.productsService, 'removeProduct');

    fixture.debugElement
      .query(By.css('[data-testid=btn-remove]'))
      .triggerEventHandler('click');

    expect(component.productsService.removeProduct).toHaveBeenCalled();
  });
});
