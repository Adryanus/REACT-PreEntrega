import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros";
import { CartProvider } from "./context/CartContext/CartProvider";
import Contact from "./components/Contact/Contact";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { MainLayout } from "./layouts/MainLayout";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { AdminLayout } from "./layouts/AdminLayout";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div>
            <Routes>
              <Route element={<MainLayout />}>
                <Route
                  path="/"
                  element={
                    <ItemListContainer titulo={"Bienvenidos a DB Tecnología"} />
                  }
                />
                <Route path="/detail/:id" element={<ItemDetailContainer />} />
                <Route
                  path="/category/:category"
                  element={
                    <ItemListContainer titulo="Productos por categoría" />
                  }
                />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/carrito" element={<Cart />} />
              </Route>

              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Login />} />

                <Route
                  path="alta-productos"
                  element={
                    <RutaProtegida>
                      <ProductFormContainer />
                    </RutaProtegida>
                  }
                />
              </Route>
            </Routes>

            {/* <Footer /> */}
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
