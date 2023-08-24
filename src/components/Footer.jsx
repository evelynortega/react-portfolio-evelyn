import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="https://github.com/evelynortega" target="_blank">
        {" "}
        GitHub
      </Link>
      <Link
        to="https://www.linkedin.com/in/evelin-ortega-9b068319b/"
        target="_blank"
      >
        LinkedIn
      </Link>
      <Link to="https://twitter.com/eveortegacodes" target="_blank">
        Twitter
      </Link>
    </footer>
  );
}

export default Footer;
