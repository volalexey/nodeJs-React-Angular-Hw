import { Component } from '@angular/core';
import { Product } from '../product/product.module';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProdcutsService } from '../prodcuts.service';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  product!: Product;

  /**
   *
   */
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public productService: ProdcutsService,
  ) {}

  ngOnInit(): void{
    this.route.params.subscribe((params:Params) =>{
      this.product = this.productService.getProductById(parseInt(params['id']));
      console.log(this.product);
    })
  }
}
