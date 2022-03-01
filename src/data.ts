import arboga from "./images/arboga.png";
import eybro from "./images/eybro.png";
import falcon from "./images/falcon.png";
import mariestad from "./images/mariestad.png";
import pistonhead from "./images/pistonhead.png";
import carlsberg from "./images/carlsberg.png";

import röttVin from "./images/röttvin.png";
import vittVin from "./images/vittvin.png";
import bubbel from "./images/bubbel.png";

import vodka from "./images/vodka.png";
import gin from "./images/gin.png";
import jäger from "./images/jäger.png";

export interface Product {
  title: string;
  price: number;
  image: string;
  count: number;
}

export const mockedProductsBeer: Product[] = [
  { title: "Arboga 10.2%", price: 15, image: arboga, count: 0 },
  { title: "Ey Bro 5%", price: 10, image: eybro, count: 0 },
  { title: "Falcon 5.2%", price: 11, image: falcon, count: 0 },
  { title: "Mariestad 5.3%", price: 8, image: mariestad, count: 0 },
  { title: "Pistonhead 4.9%", price: 22, image: pistonhead, count: 0 },
  { title: "Carlsberg 5%", price: 11, image: carlsberg, count: 0 },
];

export const mockedProductsWine: Product[] = [
  { title: "Rött Vin", price: 95, image: röttVin, count: 0 },
  { title: "Vitt Vin", price: 99, image: vittVin, count: 0 },
  { title: "Bubbel", price: 104, image: bubbel, count: 0 },
];

export const mockedProductsSpirits: Product[] = [
  { title: "Absolut Vodka", price: 249, image: vodka, count: 0 },
  { title: "Hendrick's Gin", price: 459, image: gin, count: 0 },
  { title: "Jägermeister", price: 289, image: jäger, count: 0 },
];

export interface ShoppingCartItem extends Product {
  count: number;
}
