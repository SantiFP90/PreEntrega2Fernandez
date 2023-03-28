import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = ({ numero }) => {
  const { totalCart } = useContext(CartContext);

  const total = totalCart();

  return (
    <Link to="/cart">
      <span style={{ color: "white" }}>{total}</span>
      <BsFillCartCheckFill color="red" size={30} />
    </Link>
  );
};

export default CartWidget;
