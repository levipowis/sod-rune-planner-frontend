import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
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
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
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
        <button id="signupButton" className="btn btn-dark" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
