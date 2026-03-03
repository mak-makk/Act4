import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/price-checker">Price Checker</Link>
    </nav>
  );
}

export default Navigation;
