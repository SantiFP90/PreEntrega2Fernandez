import styles from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = ({ children }) => {
  let numero = 12;
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <div className={styles.containerTitle}>
            <img
              src="https://res.cloudinary.com/dohoagwpd/image/upload/v1678548437/410146_izfgle.png"
              alt="Logo"
            />
            <h1>Japan</h1> <h1 className={styles.containerTitleh1}>Fish</h1>
          </div>
        </Link>
        <ul className={styles.containerList}>
          <Link to="/">Todos los Productos</Link>
          <Link to="/category/peces">Peces</Link>
          <Link to="/category/plantas">Plantas</Link>
          <Link to="/category/peceras">Peceras</Link>
          <CartWidget numero={numero} />
        </ul>
      </div>
      {children}
    </div>
  );
};

export default NavBar;
