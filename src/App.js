import Footer from "./Components/Footer/Footer";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Form from "./Components/Form/Form";
import CartContextProvider from "./Context/CartContext";

function App() {
  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} elementos `);
    console.log("se agrego al carrito " + cantidad + " elemento/s");
  };
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/formulario" element={<Form />} />
          <Route path="*" element={<h1>error 404</h1>} />
        </Routes>
      </CartContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
