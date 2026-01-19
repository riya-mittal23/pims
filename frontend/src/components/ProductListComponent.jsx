// frontend/src/components/ProductList.jsx
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productApi";

export const ProductListComponent=()=> {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p._id}>
            <td>{p.name}</td>
            <td>{p.category}</td>
            <td>₹{p.price}</td>
            <td>{p.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
