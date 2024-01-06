import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand text-warning" href="#">
            Rune Planner
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {localStorage.jwt === undefined ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      All Builds
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick="/builds/new">
                      New Build
                    </Link>
                  </li>
                  <li className="nav-item">
                    <LogoutLink />
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
