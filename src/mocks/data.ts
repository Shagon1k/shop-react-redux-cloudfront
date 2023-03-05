import { OrderStatus } from "~/constants/order";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const products: Product[] = [
  {
    description: "Costa Coffee Mocha Italia Signature Blend Lungo Nespresso",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    price: 9,
    img_url:
      "https://thecoffeeshop.co.uk/wp-content/uploads/2022/01/Costa_Coffee_Mocha_Italia_Signature_Blend_Lungo_Nespresso_Capsules_x3__48057.1630089333.386.513.jpg",
    title: "Mocha Italia Signature",
  },
  {
    description: "Costa Coffee Nespresso Pods Columbian Roast Espresso",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    price: 12,
    img_url:
      "https://thecoffeeshop.co.uk/wp-content/uploads/2022/01/Costa_Coffee_Nespresso_Capsules_Colombian_Blend_Strength_5_x_3__16655.1638639634.386.513.jpg",
    title: "Columbian Roast",
  },
  {
    description: "Costa Coffee Nespresso Pods Ristretto The Lively Blend",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    price: 10,
    img_url:
      "https://thecoffeeshop.co.uk/wp-content/uploads/2022/01/Costa_Coffee_Nespresso_Capsules_Ristretto_The_Lively_Blend_Strength_11__11460.1639319046.386.513.jpg",
    title: "The Lively Blend",
  },
  {
    description: "Costa Coffee Nespresso Pods Signature Blend Espresso",
    id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    price: 11,
    img_url:
      "https://thecoffeeshop.co.uk/wp-content/uploads/2022/01/Costa_Coffee_Nespresso_Capsules_Signature_Blend_Espresso_Strength_8_x_3__22917.1638364388.386.513.jpg",
    title: "Signature Blend",
  },
  {
    description: "Costa Coffee Nespresso Pods Signature Blend Lungo",
    id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    price: 8,
    img_url:
      "https://thecoffeeshop.co.uk/wp-content/uploads/2022/01/Costa_Coffee_Nespresso_Capsules_Signature_Blend_Lungo_Strength_7_x_3__33513.1638357232.386.513.jpg",
    title: "Signature Blend Lungo",
  },
  {
    description: "Starbucks Caffe Mocha Premium Instant Rich and Chocolatey",
    id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    price: 7,
    img_url:
      "https://thecoffeeshop.co.uk/wp-content/uploads/2022/02/Starbucks-Caffe-Mocha-Premium-Instant-Rich-and-Chocolatey-5-Pack-Sachets-3-Pack-600x600.jpg",
    title: "Starbucks Caffe Mocha",
  },
];

export const availableProducts: AvailableProduct[] = products.map(
  (product, index) => ({ ...product, count: index + 1 })
);

export const cart: CartItem[] = [
  {
    product: {
      description: "Costa Coffee Mocha Italia Signature Blend Lungo Nespresso",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
      price: 9,
      img_url:
        "https://thecoffeeshop.co.uk/wp-content/uploads/2022/01/Costa_Coffee_Mocha_Italia_Signature_Blend_Lungo_Nespresso_Capsules_x3__48057.1630089333.386.513.jpg",
      title: "Mocha Italia Signature",
    },
    count: 2,
  },
  {
    product: {
      description: "Costa Coffee Nespresso Pods Signature Blend Espresso",
      id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
      price: 11,
      img_url:
        "https://thecoffeeshop.co.uk/wp-content/uploads/2022/01/Costa_Coffee_Nespresso_Capsules_Signature_Blend_Espresso_Strength_8_x_3__22917.1638364388.386.513.jpg",
      title: "Signature Blend",
    },
    count: 5,
  },
];

export const orders: Order[] = [
  {
    id: "1",
    address: {
      address: "some address",
      firstName: "Name",
      lastName: "Surname",
      comment: "",
    },
    items: [
      { productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 2 },
      { productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1", count: 5 },
    ],
    statusHistory: [
      { status: OrderStatus.Open, timestamp: Date.now(), comment: "New order" },
    ],
  },
  {
    id: "2",
    address: {
      address: "another address",
      firstName: "John",
      lastName: "Doe",
      comment: "Ship fast!",
    },
    items: [{ productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 3 }],
    statusHistory: [
      {
        status: OrderStatus.Sent,
        timestamp: Date.now(),
        comment: "Fancy order",
      },
    ],
  },
];
