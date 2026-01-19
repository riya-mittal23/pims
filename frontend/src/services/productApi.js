// frontend/src/api/productApi.js
const baseUrl= import.meta.env.VITE_API_URL
const API_URL = `${baseUrl}/products`;

export const fetchProducts = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addProduct = async (product) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
};
