import { createContext } from "react";

const context = createContext({
  productList: [],
  setProductList: () => {},
  totalQuantity: 0,
  totalPrice: 0,
});

export default context;