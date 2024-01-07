import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="home">
      <h1>Welcome to Rune Planner for Season of Discovery!</h1>
      <h1>
        Please{" "}
        <Link className="link-warning link-underline-opacity-0" to="/login">
          Login
        </Link>{" "}
        to view your builds and create new ones!
      </h1>
      <h1 className="mt-5">
        {"Don't have an account?"}{" "}
        <Link className="link-warning link-underline-opacity-0" to="/signup">
          Click here
        </Link>
        {" to sign up!"}
      </h1>
    </div>
  );
}
