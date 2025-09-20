import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '@services';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  searchForm = new FormGroup({
    search: new FormControl('', { nonNullable: true })
  });

  productsService: ProductsService = inject(ProductsService);

  showProductForm: boolean = false


  constructor() {}


  ngOnInit(): void {
    this.productsService.loadProducts();
  }

  search(): void {
    this.productsService.loadProducts(this.searchForm.value.search);
  }
}
