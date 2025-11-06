import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros";
import { CartProvider } from "./context/CartContext/CartProvider"
import Contact from "./components/Contact/Contact";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/AdminComponents/ProductFormContainer/ProductFormContainer"

function App() {
  return (
    <>
      <BrowserRouter>
      
      <CartProvider> 
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer titulo={"Bienvenidos a DB Tecnología"} />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category" element={<ItemListContainer titulo="Productos por categoría" />}/>
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/admin" element={<ProductFormContainer />} />


            
          </Routes>
          
        
          <Footer />
        </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
