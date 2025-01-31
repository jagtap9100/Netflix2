import React, { useRef } from "react";
import { auth } from "./auth"; // Make sure you import auth from your Firebase setup file
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "../style/login.css";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberRef = useRef(null);

  const signinHandle = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Logged in as:", userCredential.user);
        // You can handle the logic after successful login here, like redirecting
      })
      .catch((error) => {
        console.log("Login error:", error.message);
        // Display your error message here
      });

    console.log("Login clicked");
  };

  return (
    <>
      <div className="container1">
        <div className="login-container" id="login-container">
          <div className="alert alert-danger" id="error-message" role="alert">
            Invalid username or password!
          </div>
          <div className="login-form">
            <h2>Login</h2>
            <form id="login-form">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  ref={emailRef}
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  ref={passwordRef}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  ref={rememberRef}
                  type="checkbox"
                  className="form-check-input"
                  id="remember-me"
                />
                <label className="form-check-label" htmlFor="remember-me">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                onClick={signinHandle}
                className="btn btn-primary btn-custom"
              >
                Login
              </button>
              <div className="mt-3 text-center">
                <a href="#" id="forgot-password-link">
                  Forgot password?
                </a>{" "}
                |{" "}
                <a href="#" id="register-link">
                  Register
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
