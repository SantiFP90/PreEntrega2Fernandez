import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);

  const productosFilter = products.filter(
    (elemento) => elemento.category === name
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(name ? productosFilter : products);
      // reject("lo siento, no tienes autorizacion")
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  console.log(items);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
