import axios from "axios";

export function LogoutLink() {
  // Handler to remove jwt and loads "/" after
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <a href="#" className="nav-link" onClick={handleClick}>
      Logout
    </a>
  );
}
