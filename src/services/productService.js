import api from "../lib/api";

export async function getProducts() {
  const res = await api.get(`/products`);

  const products = res.data.products;
  return products;
}
export async function getProduct(id) {
  const res = await api.get(`/products/${id}`);
  const product = res.data;
  console.log(product);
  return product;
}
export async function getProductsByCategory(category) {
  const res = await api.get(`/products/category/${category}`);
  return res.data.products;
}
function addProduct() {}
function updateProduct() {}
function deleteProduct() {}
