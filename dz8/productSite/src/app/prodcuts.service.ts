import { Injectable } from '@angular/core';
import { Product } from './product/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProdcutsService {

  constructor() { }

  products: Product[] =[
    {
      Id: 1,
      TypeProduct: "Smartphone",
      Vendor: "Apple",
      Model: "iPhone 15 Pro",
      Price: 999,
      Img: 'imgs/iphone-15-pro-max.jpg',
      Count: 25,
      VendorEmail: "apple_support@example.com",
      Description: "Latest Apple smartphone with advanced features."
    },
    {
      Id: 2,
      TypeProduct: "Laptop",
      Vendor: "Dell",
      Model: "XPS 15",
      Price: 1299,
      Img: "imgs/electronic_components_image.jpg.webp",
      Count: 15,
      VendorEmail: "dell_support@example.com",
      Description: "High-performance laptop suitable for professionals."
    },
    {
      Id: 3,
      TypeProduct: "Headphones",
      Vendor: "Sony",
      Model: "WH-1000XM5",
      Price: 399,
      Img: "imgs/electronic_components_image.jpg.webp",
      Count: 50,
      VendorEmail: "sony_support@example.com",
      Description: "Noise-cancelling wireless headphones with excellent sound quality."
    },
    {
      Id: 4,
      TypeProduct: "Tablet",
      Vendor: "Samsung",
      Model: "Galaxy Tab S9",
      Price: 899,
      Img: "imgs/electronic_components_image.jpg.webp",
      Count: 30,
      VendorEmail: "samsung_support@example.com",
      Description: "Powerful Android tablet for work and entertainment."
    },
    {
      Id: 5,
      TypeProduct: "Smartwatch",
      Vendor: "Garmin",
      Model: "Fenix 7",
      Price: 799,
      Img: "imgs/electronic_components_image.jpg.webp",
      Count: 20,
      VendorEmail: "garmin_support@example.com",
      Description: "Advanced multisport GPS smartwatch for fitness enthusiasts."
    }
  ];

  getProductById(id: number): Product{
    return (this.products.find(product => product.Id === id)) as Product;
  }

  addProduct(product: Product){
    this.products.push(product);
  }

  deleteProduct(id: number){
    this.products = this.products.filter(p => p.Id !== id);
  }
}
