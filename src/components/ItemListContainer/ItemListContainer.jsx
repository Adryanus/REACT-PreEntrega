import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css"; // 🔹 Asegurate de tener este CSS

export const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // 🔹 Indicador de carga
  const [error, setError] = useState(null); // 🔹 Para manejar errores

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un problema al buscar productos");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
        setError("No se pudieron cargar los productos 😞");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <section className="item-list-container">
        <h1>{titulo}</h1>
        <h2>Nuestros Productos</h2>

        {loading && <p>Cargando productos...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && <ItemList lista={products} />}
      </section>
    </main>
  );
};

