import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";
import Card from "@mui/material/Card";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {
    console.log("se agregaron " + cantidad + " productos al carrito");
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
        color: "white",
      }}
    >
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
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          <img style={{ width: "100%" }} src={productSelected.img} alt="" />
          <h2 style={{ color: "red" }}>{productSelected.title}</h2>
          <h3>{productSelected.description}</h3>
          <div style={{ width: 500 }}>
            <h4>{productSelected.allDescriptions}</h4>
          </div>
          <h4>${productSelected.price}</h4>
          <ItemCount stock={productSelected.stock} onAdd={onAdd} />
        </div>
      </Card>
    </div>
  );
};
export default ItemDetailContainer;
