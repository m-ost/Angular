export interface ProductObject {
  cartItemsCount: CartItemsCount;
  cart: Product[];
}

export interface Product {
  name: string;
  price: number;
  category: string;
  isAvailable: boolean;
  id: number;
}

export interface CartItemsCount {
  [key: string]: number;
}

