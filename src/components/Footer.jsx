import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="https://github.com/evelynortega"> GitHub</Link>
      <Link to="https://www.linkedin.com/in/evelin-ortega-9b068319b/">
        LinkedIn
      </Link>
      <Link to="https://twitter.com/eveortegacodes">Twitter</Link>
    </footer>
  );
}

export default Footer;
