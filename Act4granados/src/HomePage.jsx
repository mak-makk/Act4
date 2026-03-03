import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <h1>Welcome to the Price Checker</h1>
      <p><strong>Conditional Rendering:</strong> Show/hide components based on state.</p>
      <p><strong>useEffect:</strong> Runs side effects like fetching data or updating document title.</p>
      <p><strong>Routing:</strong> BrowserRouter, Routes, Route, and Link allow navigation between pages.</p>
      <hr />
      <h3>Features:</h3>
      <ul>
        <li>Price Checker - Calculate product totals</li>
       
      </ul>
    </div>
  );
}

export default HomePage;
