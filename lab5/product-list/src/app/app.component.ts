import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from './product-components/category.component';
import { ProductItemComponent } from './product-components/product-item.component';
import { ProductListComponent } from './product-components/product-list.component';
import { Product } from './products/products';
import { smartphones, laptops, tablets, accessories } from './products/products';

interface Products{
  [category:string]: Product[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CategoryComponent, ProductItemComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'lab5'
  selectedCategory: string = '';
  allProducts: Products = {
    'Smartphones': smartphones,
    'Laptops': laptops,
    'Tablets': tablets,
    'Accessories': accessories,
  };

  filteredProducts = [] as any;

  onCategorySelected(category: string) {
    this.selectedCategory = category;
    this.filteredProducts = this.allProducts[category as keyof typeof this.allProducts] || [];
  }
}