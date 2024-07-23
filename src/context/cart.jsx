import { createContext, useReducer } from "react";
import { useCartReduce } from "../hooks/useCartReduce";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { addToCart, removeFromCart, clearCart, state } = useCartReduce();

  return (
    <CartContext.Provider
      value={{
        clearCart,
        addToCart,
        cart: state,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
