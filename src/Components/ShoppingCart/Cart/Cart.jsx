import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormCheckout from "../FormCheckout/FormCheckout";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProduct } =
    useContext(CartContext);

  const totalPrice = getTotalPrice();

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

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

  if (cart.length === 0 && orderId === null) {
    return (
      <div className={styles.container}>
        <h1 className={styles.titulos}>¡El carrito esta vacio!</h1>
        <h2 className={styles.titulos}>
          Agrega productos, ingresando al detalle de cada uno.
        </h2>
        <br />
        <Link to="/" className={styles.botones}>
          {" "}
          Volver{" "}
        </Link>
      </div>
    );
  }

  if (orderId) {
    return (
      <div className={styles.container}>
        <h1 className={styles.titulos}>
          ¡En 24hs su pedido estará listo para ser retirado en sucursal!
        </h1>
        <br />
        <h2 className={styles.titulos}>Orden de compra emitida.</h2>
        <br />
        <h3 className={styles.titulos}> COMPROBANTE: {orderId} </h3>
        <br />
        <Link to="/" className={styles.botones}>
          {" "}
          Volver{" "}
        </Link>
      </div>
    );
  }

  return (
    <div>
      {!showForm ? (
        <div className={styles.container}>
          {cart.map((e) => {
            return (
              <div className={styles.cards} key={e.id}>
                <div className={styles.containerCards}>
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
                  <h2 style={{ color: "red" }}>
                    Total: $ {e.price * e.quantity}
                  </h2>
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

          {cart.length > 0 && (
            <div>
              <h1 className={styles.titulos}>
                Total de compra: $ {totalPrice}
              </h1>
              <button className={styles.botones} onClick={clear}>
                Vaciar Carrito
              </button>
              <button
                className={styles.botones}
                onClick={() => setShowForm(true)}
              >
                ¡Encargar Compra!
              </button>
              <Link to="/" className={styles.botones}>
                {" "}
                Seguir agregando{" "}
              </Link>
            </div>
          )}
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;
