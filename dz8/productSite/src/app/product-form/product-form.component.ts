import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdcutsService } from '../prodcuts.service';

@Component({
  selector: 'app-product-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
 constructor(public productService: ProdcutsService){}
 form!: FormGroup;

  ngOnInit(): void{
    this.form = new FormGroup({
      TypeProduct: new FormControl('', [Validators.required]),
      Vendor: new FormControl('', [Validators.required]),
      Model: new FormControl('', [Validators.required]),
      Price: new FormControl(null, [Validators.required, Validators.min(100)]),
      Img: new FormControl(''),
      Count: new FormControl(null, [Validators.required, Validators.min(0)]),
      VendorEmail: new FormControl(null, [Validators.required, Validators.email]),
      Description: new FormControl(''),
    })
  }

  onSubmit(){
    const newProduct = {Id: Date.now(), ...this.form.value};
    this.productService.addProduct(newProduct);
  }

}
