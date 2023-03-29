import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../fireBaseConfig";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import style from "./ItemListContainer.module.css";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);

  /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000);
        });
        promesa.then((respuesta) => {
            setItems(respuesta);
        });
    }, [id]); */

  /* useEffect(() => { // Para subir todos los Productos de mi json local al Firestore
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        arrayProductos.forEach(item => {
            addDoc(itemsCollection, item);
        });
        console.log("Se agregaron los Productos!");
    }, []); */

  useEffect(() => {
    const itemsCollection = collection(db, "productos");

    getDocs(itemsCollection).then((res) => {
      let products = res.docs.map((product) => {
        console.log(product.data());
        return {
          ...product.data(),
        };
      });
      console.log(products);
      setItems(products);
    });

    // const productList = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     const productosFilter = products.filter(
    //       (elemento) => elemento.category === name
    //     );
    //     resolve(name ? productosFilter : products);
    //   }, 1500);
    // });
    // productList
    //   .then((res) => {
    //     setItems(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [name]);

  if (items.length === 0) {
    return (
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          src="https://res.cloudinary.com/dohoagwpd/image/upload/v1678548437/410146_izfgle.png"
          alt=""
          className={style.rotatingImg}
        />
      </div>
    );
  }
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
