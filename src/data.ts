import arboga from "./images/arboga.png";
import eybro from "./images/eybro.png";
import falcon from "./images/falcon.png";
import mariestad from "./images/mariestad.png";
import pistonhead from "./images/pistonhead.png";
import carlsberg from "./images/carlsberg.png";

export interface Product {
  title: string;
  price: number;
  image: string;
}

export const mockedProducts: Product[] = [
  { title: "Arboga 10.2%", price: 15, image: arboga },
  { title: "Ey Bro 5%", price: 10, image: eybro },
  { title: "Falcon 5.2%", price: 11, image: falcon },
  { title: "Mariestad 5.3%", price: 8, image: mariestad },
  { title: "Pistonhead 4.9%", price: 22, image: pistonhead },
  { title: "Carlsberg 5%", price: 11, image: carlsberg },
];

export interface ShoppingCartItem extends Product {
  count: number;
}
