import { Suspense, lazy } from "react";
import Product from "../../../Components/product";
import ProductAll from "../../../Components/productAll";

async function getProduct(productId) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  return res.json();
}

async function getAllProduct() {
  const res = await fetch(`https://dummyjson.com/products`);
  return res.json();
}

export default async function Page({ params }) {
  const productData = await getProduct(1);
  const allProductsData = await getAllProduct();
  console.log(productData, "productData");
  console.log(allProductsData, "allProductsData");
  console.log(params, "params");
  return (
    <div className="text-5xl font-bold text-center w-full h-full">
      <Suspense fallback={<div>Loading1...</div>}>
        <Product params={productData} />
      </Suspense>
      <Suspense fallback={<div>Loading2...</div>}>
        <ProductAll params={allProductsData} />
      </Suspense>
      <div>Checkout</div>
    </div>
  );
}
