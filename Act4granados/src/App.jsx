import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "./HomePage";
import PriceChecker from "./PriceChecker";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/price-checker" element={<PriceChecker />} />
 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
