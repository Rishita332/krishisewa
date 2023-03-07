export interface ProductModelServer {
    id: Number;
    name: string;
    category: String;
    weight: String;
    image: String;
    price: number;
    quantity: Number;
  }
  
  
  export interface serverResponse  {
    count: number;
    products: ProductModelServer[]
  };