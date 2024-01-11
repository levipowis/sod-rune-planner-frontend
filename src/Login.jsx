import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

// Gets jwt and stores it as a variable
const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  // Handler to submit login form and then load "/", throws an error message if email or password is invalid
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="login">
      {/* Renders error if invalid email or password */}
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <div className="text-light">
        <h1>LOG IN</h1>
      </div>
      <div className="mb-3">
        {"Don't have an account?  "}
        <Link className="link-light" to="/signup">
          Sign Up
        </Link>
      </div>
      {/* Login form */}
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input name="email" type="email" id="floatingInput" className="form-control" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email Address</label>
        </div>
        <div className="form-floating">
          <input
            name="password"
            type="password"
            placeholder="Password"
            id="floatingPassword"
            className="form-control"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        {/* Button to submit login form */}
        <div>
          <button type="submit" className="btn btn-dark mt-3">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
