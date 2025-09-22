

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductModel } from '@models/products.model';
import { ProductsService } from '@services';

import { InputWrapperModule } from '../input-wrapper/input-wrapper.module';
import { ProductFormComponent } from './product-form.component';


describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;
  let localStore: { [key: string]: string };

  let productForm: FormGroup;

  const validFormMock: ProductModel = { name: 'test a', price: 1.99, quantity: 1 }
  const invalidFormMock: ProductModel = { name: '', price: -1.99, quantity: -1 }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFormComponent],
      imports: [
        ReactiveFormsModule,
        InputWrapperModule,
      ],
      providers: [ ProductsService ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    productForm = component.productForm;

    component.productsService = TestBed.inject(ProductsService);

    localStore = {};

    fixture.detectChanges();

    spyOn(window.localStorage, 'getItem').and.callFake(key => key in localStore ? localStore[key] : null);
    spyOn(window.localStorage, 'setItem').and.callFake((key, value) => (localStore[key] = value + ''));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be valid', () => {
    productForm.setValue(validFormMock);
    productForm.updateValueAndValidity();

    expect(productForm.valid).toBeTruthy();
  });

  it('form should be invalid', () => {
    productForm.setValue(invalidFormMock);
    productForm.updateValueAndValidity();

    expect(productForm.valid).toBeFalsy();
  });

  it('should add product when form is valid', () => {
    const btnSubmit: HTMLButtonElement = fixture.nativeElement.querySelector('[data-testid=form-btn-submit]');

    spyOn(component.productsService, 'addProduct');

    productForm.setValue(validFormMock);

    btnSubmit.click();

    expect(component.productsService.addProduct).toHaveBeenCalledWith(validFormMock);
  });
});
