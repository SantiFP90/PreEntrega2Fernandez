import { useEffect, useState } from "react";

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

      <button
        onClick={sumar}
        style={{
          margin: "4px",
          backgroundColor: "grey",
          color: "white",
          fontSize: "large",
          padding: "2px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Sumar
      </button>

      <button
        onClick={restar}
        style={{
          margin: "4px",
          backgroundColor: "grey",
          color: "white",
          fontSize: "large",
          padding: "2px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Restar
      </button>

      <button
        onClick={() => onAdd(contador)}
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
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
