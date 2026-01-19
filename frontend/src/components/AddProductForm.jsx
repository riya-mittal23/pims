// frontend/src/components/AddProductForm.jsx
import { useState } from "react";
import { addProduct } from "../services/productApi";

export const AddProductForm=()=> {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct({
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
    });
    setForm({ name: "", category: "", price: "", stock: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Category" value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })} />
      <input placeholder="Price" type="number" value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })} />
      <input placeholder="Stock" type="number" value={form.stock}
        onChange={(e) => setForm({ ...form, stock: e.target.value })} />
      <button>Add Product</button>
    </form>
  );
}
