// product.model.ts

import { Review } from "./review";

export class Product {
  id: number;
  productName: string;
  weight: number;
  category: string;
  price: number;
  units: string;
  description: string;
  address: string;
  photo: string;
  reviews: Review[];

  constructor(
    id: number = 0,
    productName: string = '',
    weight: number = 0,
    category: string = '',
    price: number = 0,
    units: string = '',
    description: string = '',
    address: string = '',
    photo: string = '',
    reviews: Review[] = []
  ) {
    this.id = id;
    this.productName = productName;
    this.weight = weight;
    this.category = category;
    this.price = price;
    this.units = units;
    this.description = description;
    this.address = address;
    this.photo = photo;
    this.reviews = reviews;
  }
}
