import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = ({ numero }) => {
  return (
    <Link to="/cart">
      <span>0</span>
      <BsFillCartCheckFill color="red" size={30} />
    </Link>
  );
};

export default CartWidget;
