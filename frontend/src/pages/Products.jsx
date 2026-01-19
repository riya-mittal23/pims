import { AddProductForm } from "../components/AddProductForm";
import { ProductListComponent } from "../components/ProductListComponent";


export const Products=() =>{
  return (
    <>
      <h2>Inventory Management</h2>
      <AddProductForm />
      <ProductListComponent />
    </>
  );
}
