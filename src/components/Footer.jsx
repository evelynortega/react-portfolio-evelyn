import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="/github">GitHub</Link>
      <Link to="/linked">LinkedIn</Link>
      <Link to="/twitter">Twitter</Link>
      <Link to="/stack">Stack Overflow</Link>
    </footer>
  );
}

export default Footer;
