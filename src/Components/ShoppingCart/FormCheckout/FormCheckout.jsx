import React, { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../fireBaseConfig";
import styles from "./FormCheckout.module.css";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: Number,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let total = getTotalPrice();

    let order = {
      buyer: userData,
      items: cart,
      total,
    };

    let orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => {
        console.log(err);
      });

    cart.map((product) => {
      let refDoc = doc(db, "productos", product.id);
      return updateDoc(refDoc, { stock: product.stock - product.quantity });
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulos}>
        Complete el siguiente formulario para realizar su orden de compra.
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputs}
          type="text"
          placeholder="Ingrese su usuario"
          name="name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />

        <input
          className={styles.inputs}
          type="email"
          placeholder="Ingrese su correo"
          name="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />

        <input
          className={styles.inputs}
          type="number"
          placeholder="Ingrese su telefono"
          name="telefono"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />

        <button className={styles.boton} type="submit">
          Encargar
        </button>
      </form>
      <div>
        <img
          className={styles.img}
          src="https://p4.wallpaperbetter.com/wallpaper/995/696/2/fishes-koi-fish-koi-carp-wallpaper-preview.jpg"
          alt="Img Carpa"
        />
      </div>
    </div>
  );
};

export default FormCheckout;
