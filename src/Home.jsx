import { Link } from "react-router-dom";

export function Home() {
  return (
    <div style={{ textAlign: "center", color: "white", margin: "200px auto 0px" }}>
      <h1>Welcome to Rune Planner for Season of Discovery!</h1>
      <h1>
        Please{" "}
        <Link className="link-warning link-underline-opacity-0" to="/login">
          Login
        </Link>{" "}
        to view your builds and create new ones!
      </h1>
    </div>
  );
}
