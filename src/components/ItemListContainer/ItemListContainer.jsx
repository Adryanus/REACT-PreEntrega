import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"; // 🔹 Importa useParams
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css"; // 🔹 Asegurate de tener este CSS

export const ItemListContainer = ({ titulo }) => {
  const { category } = useParams(); //
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // 🔹 Indicador de carga
  const [error, setError] = useState(null); // 🔹 Para manejar errores

  useEffect(() => {
    fetch("https://690a73ce1a446bb9cc2295d4.mockapi.io/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un problema al buscar productos");
        }
        return res.json();
      })
     .then((data) => {
        const filtered = category
          ? data.filter((prod) => prod.category === category)
          : data;
        setProducts(filtered);
      })
      .catch((err) => {
        console.error(err);
        setError("No se pudieron cargar los productos 😞");
      })
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <main>
      <section className="item-list-container">
        <h1>{titulo}</h1>
        <h2>Nuestros Productos</h2>
        {category && <h2>Categoría: {category}</h2>}
        {loading && <p>Cargando productos...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && <ItemList lista={products} />}
      </section>
    </main>
  );
};

