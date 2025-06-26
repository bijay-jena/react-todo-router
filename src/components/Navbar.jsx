import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ marginBottom: "1rem" }}>
    <Link to="/">Home</Link> | <Link to="/about">About</Link>
  </nav>
);

export default Navbar;
