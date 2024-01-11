import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Signup() {
  const [errors, setErrors] = useState([]);

  // Hander to submit signup form on click and then load "/login" route, also catches and throws an error message
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/login"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="signup">
      <div>
        <h1 className="text-light">SIGN UP</h1>
      </div>
      <div>
        Already have an account?{" "}
        <Link className="link-light" to="/login">
          Log In
        </Link>
      </div>
      {/* Renders error message */}
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      {/* Signup form */}
      <form id="signupForm" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input className="form-control" placeholder="Name" name="name" type="text" />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input className="form-control" placeholder="name@example.com" name="email" type="email" />
          <label htmlFor="floatingInput">Email Address</label>
        </div>
        <div className="form-floating mb-3">
          <input className="form-control" name="password" id="floatingPassword" type="password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input className="form-control" name="password_confirmation" type="password" />
          <label htmlFor="floatingPassword">Confirm Password</label>
        </div>
        {/* Button to submit signup form */}
        <button id="signupButton" className="btn btn-dark" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
