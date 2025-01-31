import React, { useRef } from "react";
import Navbar from "./SigninNav";
import "../style/login.css";
import { auth } from "./auth";
import { useDispatch, useSelector } from "react-redux";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
export default function LoginScrren() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const registerHandle = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      console.log("Email and password are required.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User registered as:", userCredential.user);
        // Handle successful registration (e.g., redirect or display success message)
      })
      .catch((error) => {
        console.log("Registration error:", error.message);
        // Display error message to the user
      });
  };
  return (
    <>
      <div className="container1">
        <Navbar />
        <div className="login_banner w-full text-white text-center">
          <h1>Unlimited movies, TV shows and more</h1>
          <span>Starts at ₹149. Cancel at any time.</span>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="input_section">
            <input
              ref={emailRef}
              className="text-black"
              type="text"
              placeholder="Enter Email"
              name="emailinput"
              required
            />
            <input
              ref={passwordRef}
              className="text-black mt-2"
              type="password"
              placeholder="Enter Password"
              name="passwordinput"
              required
            />
            <button onClick={registerHandle} type="button">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
