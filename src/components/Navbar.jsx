import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/project">Projects</Link>
      <Link to="/contact">Contact Me</Link>
      <Link to="/resume">Resume</Link>
    </nav>
  );
}

export default Navbar;
