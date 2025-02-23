import { Component, Input } from '@angular/core';
import { ProductItemComponent } from './product-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  template: `
    <div class="products-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      <app-product-item *ngFor="let product of products" [product]="product" (remove)="removeProduct($event)"></app-product-item>
    </div>
  `,
  imports: [ProductItemComponent, CommonModule],
  styles: []
})
export class ProductListComponent {
  @Input() products: any[] = [];

  removeProduct(product: any) {
    this.products = this.products.filter(p => p !== product);
  }
}
