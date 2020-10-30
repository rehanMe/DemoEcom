export class Product {
  id: number;
  description: string;
  image: string;
  name: string;
  price: string;
  quantity: string;
  constructor(
    id: number,
    description: string,
    image: string,
    name: string,
    price: string,
    quantity: string
  ) {
    this.id = id;
    this.description = description;
    this.image = image;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
