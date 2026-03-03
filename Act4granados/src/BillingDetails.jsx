function BillingDetails({ product }) {
  return (
    <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "4px", backgroundColor: "#f9f9f9" }}>
      <h3>Billing Details</h3>
      <p><strong>Product:</strong> {product.name}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <p><strong>Unit Price:</strong> ${product.price.toFixed(2)}</p>
      <p style={{ fontSize: "1.2rem", color: "#646cff" }}><strong>Total: ${product.total.toFixed(2)}</strong></p>
    </div>
  );
}

export default BillingDetails;
