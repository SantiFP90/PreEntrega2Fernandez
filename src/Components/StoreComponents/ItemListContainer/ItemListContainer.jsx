import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../fireBaseConfig";
import ItemList from "../ItemList/ItemList";
import style from "./ItemListContainer.module.css";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "productos");

    let consulta = undefined;

    if (name) {
      const q = query(itemsCollection, where("category", "==", name));
      consulta = getDocs(q);
    } else {
      consulta = getDocs(itemsCollection);
    }

    consulta.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setItems(products);
    });
  }, [name]);

  if (items.length === 0) {
    return (
      <div className={style.container}>
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

// useEffect(() => {
//   // Para subir todos los Productos de mi json local al Firestore

//   const itemsCollection = collection(db, "productos");
//   products.forEach((item) => {
//     addDoc(itemsCollection, item);
//   });
//   console.log("Se agregaron los Productos!");
// }, []);
