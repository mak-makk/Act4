import { useState } from "react";

function ProductDetails({ onCalculate }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleCalculate = () => {
    if (name && quantity && price) {
      onCalculate({ 
        name, 
        quantity: parseInt(quantity), 
        price: parseFloat(price), 
        total: parseInt(quantity) * parseFloat(price) 
      });
    } else {
      alert("Please fill all fields");
    }
  };

  const handleReset = () => {
    setName("");
    setQuantity("");
    setPrice("");
    onCalculate(null);
  };

  return (
    <div style={{ marginBottom: "2rem", padding: "1rem", border: "1px solid #ddd", borderRadius: "4px" }}>
      <h3>Enter Product Details</h3>
      <div>
        <input 
          placeholder="Product Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Quantity" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Unit Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
      </div>
      <div>
        <button onClick={handleCalculate}>Calculate</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default ProductDetails;
