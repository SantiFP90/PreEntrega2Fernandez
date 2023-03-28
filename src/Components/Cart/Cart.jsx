import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProduct } =
    useContext(CartContext);

  const totalPrice = getTotalPrice();

  const deleteds = (id) => {
    toast.error("Producto eliminado del carrito", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
    deleteProduct(id);
  };

  const clear = () => {
    Swal.fire({
      title: "¿Quieres vaciar el carrito?",
      text: "Se borraran todos los productos en la lista.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "orange",
      cancelButtonColor: "red",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire(
          "Listo!",
          "Se vaciaron todos los productos correctamente",
          "success"
        );
      }
    });
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {cart.map((e) => {
        return (
          <div
            style={{
              width: "80%",
              margin: 3,
              padding: 5,
              backgroundColor: "red",
            }}
            key={e.id}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <img
                style={{
                  width: "15%",
                  textAlign: "center",
                  borderRadius: "5px",
                }}
                src={e.img}
                alt=""
              />
              <h2>{e.title}</h2>
              <h3>Cantidad: {e.quantity}</h3>
              <h3> $ {e.price} c/u </h3>
              <h2 style={{ color: "red" }}>Total: $ {e.price * e.quantity}</h2>
              <MdDeleteForever
                color="red"
                cursor="pointer"
                size={30}
                onClick={() => deleteds(e.id)}
              />
              <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="colored"
              />
            </div>
          </div>
        );
      })}
      <h1 style={{ color: "red" }}>Total de compra: $ {totalPrice}</h1>

      {cart.length > 0 && (
        <div>
          <button
            style={{
              margin: "4px",
              backgroundColor: "red",
              color: "white",
              fontSize: "large",
              padding: "2px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={clear}
          >
            Vaciar Carrito
          </button>
          <button
            style={{
              margin: "4px",
              backgroundColor: "red",
              color: "white",
              fontSize: "large",
              padding: "2px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ¡Realizar Compra!
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
