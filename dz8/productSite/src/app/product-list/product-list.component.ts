import { Component } from '@angular/core';
import { ProdcutsService } from '../prodcuts.service';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '../product-form/product-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductFormComponent, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  /**
   *
   */
  constructor(public productService: ProdcutsService) {    
  }

  deleteHandler(id: number){
    this.productService.deleteProduct(id);
  }
}
