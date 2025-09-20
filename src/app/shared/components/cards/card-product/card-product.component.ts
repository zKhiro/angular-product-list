import { Component, Input } from '@angular/core';
import { ProductsService } from '@services';


@Component({
  selector: 'app-card-product',
  standalone: false,
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  @Input() index: number;
  @Input() name: string;
  @Input() price: number;
  @Input() quantity: number;


  constructor(readonly productsService: ProductsService) {}


  removeProduct(): void {
    this.productsService.removeProduct(this.index)
  }

}
