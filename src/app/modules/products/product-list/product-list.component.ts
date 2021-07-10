import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  template: `
    <div class="main-container">
      <h4 class="module-title">Product List (User)</h4>
      <app-table
        [moduleName]="'product'"
        [elementData]="elementData"
        [displayedColumns]="columns">
      </app-table>
    </div>
  `,
  styles: [`
    :host { position: relative }
  `],
})
export class ProductListComponent implements OnInit {

  elementData = [];
  columns = ['name', 'unitPrice', 'description', 'available', 'img'];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(({ data }) => this.elementData = data);
  }
}
