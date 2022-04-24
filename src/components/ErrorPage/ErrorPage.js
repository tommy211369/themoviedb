import "./ErrorPage.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="ErrorPage">
      <p>Oops ... cette page n'existe page ...</p>
      <Link to="/">
        <button>Retournez à l'accueil</button>
      </Link>
    </div>
  );
}

export default ErrorPage;
