import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarCarrito = (producto) => {
    let exist = isInCart(producto.id);
    if (exist) {
      let newCart = cart.map((e) => {
        if (e.id === producto.id) {
          return {
            ...e,
            quantity: producto.quantity,
          };
        } else {
          return e;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }
  };

  const isInCart = (id) => {
    return cart.some((elemento) => elemento.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCart = () => {
    const total = cart.reduce((acc, e) => {
      return acc + e.quantity;
    }, 0);
    return total;
  };

  const getTotalPrice = () => {
    let totalPrice = cart.reduce((acc, e) => {
      return acc + e.quantity * e.price;
    }, 0);
    return totalPrice;
  };

  const deleteProduct = (id) => {
    const newCart = cart.filter((e) => e.id !== id);
    setCart(newCart);
  };

  const getQuantity = (id) => {
    const productSelected = cart.find((e) => e.id === id);
    return productSelected?.quantity;
  };

  let data = {
    // cart: cart,
    cart,
    setCart,
    agregarCarrito,
    clearCart,
    totalCart,
    getTotalPrice,
    deleteProduct,
    getQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
