import styles from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../../../fireBaseConfig";
import { collection, getDocs } from "firebase/firestore";

const NavBar = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "categories");

    getDocs(itemsCollection).then((res) => {
      let arrayCategories = res.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategoryList(arrayCategories);
    });
  }, []);

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
          {categoryList.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.path}
                className={styles.navbarLink}
              >
                {category.title}
              </Link>
            );
          })}
          <CartWidget />
        </ul>
      </div>
      {children}
    </div>
  );
};

export default NavBar;
