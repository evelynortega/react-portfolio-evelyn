import { Link } from "react-router-dom";
// how do i link this pag to "resume" in navbar?
// how to download resume
function Resume() {
  return (
    <div>
      <h2>LINK TO MY RESUME</h2>
      <Link to="https://docs.google.com/document/d/1Ce6u87aJj4cTT-tspWZIH_GHheKLyhfSTHdnuG3N2cs/edit?usp=sharing">
        Click here to view!
      </Link>
    </div>
  );
}

export default Resume;
