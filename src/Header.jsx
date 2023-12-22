import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <Link to="/">Home |</Link>
      {localStorage.jwt === undefined ? (
        <>
          <Link to="/signup"> Signup |</Link>
          <Link to="login"> Login</Link>
        </>
      ) : (
        <LogoutLink />
      )}
    </header>
  );
}
