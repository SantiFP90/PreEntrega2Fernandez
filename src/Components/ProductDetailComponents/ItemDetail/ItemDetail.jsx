import React from "react";
import Card from "@mui/material/Card";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ productSelected, onAdd, quantity }) => {
  return (
    <div className={styles.container}>
      <h1>Producto Seleccionado:</h1>
      <Card
        sx={{
          width: "auto",
          height: "auto",
          margin: 0.5,
          padding: 0.5,
          backgroundColor: "red",
        }}
      >
        <div className={styles.divContainer}>
          <img
            style={{ width: "100%", borderRadius: "5px" }}
            src={productSelected.img}
            alt=""
          />
          <h2 style={{ color: "red" }}>{productSelected.title}</h2>
          <h3>{productSelected.description}</h3>
          <h4> {productSelected.allDescriptions}</h4>
          <h4>${productSelected.price}</h4>
          <ItemCount
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={quantity}
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
      </Card>
    </div>
  );
};

export default ItemDetail;
