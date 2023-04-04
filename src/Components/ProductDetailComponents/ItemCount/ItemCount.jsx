import { useEffect, useState } from "react";
import style from "./ItemCount.module.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  useEffect(() => {
    setContador(initial);
  }, [initial]);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h2>Cantidad: {contador}</h2>

      <button onClick={sumar} className={style.botonesmym}>
        Sumar
      </button>

      <button onClick={restar} className={style.botonesmym}>
        Restar
      </button>

      <button onClick={() => onAdd(contador)} className={style.botonAgregar}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
