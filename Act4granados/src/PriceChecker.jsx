import { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";
import BillingDetails from "./BillingDetails";

function PriceChecker() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    document.title = "Price Checker";
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Price Checker</h2>
      <ProductDetails onCalculate={setProduct} />
      {product && <BillingDetails product={product} />}
    </div>
  );
}

export default PriceChecker;
