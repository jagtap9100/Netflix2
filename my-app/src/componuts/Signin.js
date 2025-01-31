import React from "react";

export default function Signin() {
  return (
    <>
      <div class="login-container" id="login-container">
        <div class="alert alert-danger" id="error-message" role="alert">
          Invalid username or password!
        </div>
        <div class="login-form">
          <h2>Login</h2>
          <form id="login-form">
            <div class="mb-3">
              <label for="username" class="form-label">
                Username
              </label>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Enter your username"
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="remember-me"
              />
              <label class="form-check-label" for="remember-me">
                Remember me
              </label>
            </div>
            <button type="submit" class="btn btn-primary btn-custom">
              Login
            </button>
            <div class="mt-3 text-center">
              <a href="#" id="forgot-password-link">
                Forgot password?
              </a>{" "}
              |
              <a href="#" id="register-link">
                Register
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* <!-- Register Form --> */}
      <div
        class="signup-container"
        id="signup-container"
        style={{ display: "none" }}
      >
        <div class="alert alert-danger" id="signup-error-message" role="alert">
          All fields are required!
        </div>
        <div class="signup-form">
          <h2>Register</h2>
          <form id="signup-form">
            <div class="mb-3">
              <label for="signup-username" class="form-label">
                Username
              </label>
              <input
                type="text"
                class="form-control"
                id="signup-username"
                placeholder="Enter your username"
                required
              />
            </div>
            <div class="mb-3">
              <label for="signup-email" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="signup-email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="signup-password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="signup-password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary btn-custom">
              Register
            </button>
            <div class="mt-3 text-center">
              <a href="#" id="back-to-login-link">
                Back to Login
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* <!-- OTP Verification Form --> */}
      <div class="otp-container" id="otp-container" style={{ display: "none" }}>
        <div class="alert alert-danger" id="otp-error-message" role="alert">
          Please enter the correct OTP!
        </div>
        <div class="otp-form">
          <h2>Verify OTP</h2>
          <form id="otp-form">
            <div class="otp-input-group">
              <input type="text" class="otp-input" maxlength="1" required />
              <input type="text" class="otp-input" maxlength="1" required />
              <input type="text" class="otp-input" maxlength="1" required />
              <input type="text" class="otp-input" maxlength="1" required />
              <input type="text" class="otp-input" maxlength="1" required />
              <input type="text" class="otp-input" maxlength="1" required />
            </div>
            <button type="submit" class="btn btn-primary btn-custom mt-3">
              Verify
            </button>
            <div class="mt-3 text-center">
              <a href="#">Resend OTP</a>
            </div>
          </form>
        </div>
      </div>

      {/* <!-- Forgot Password Form --> */}
      <div
        class="forget-container"
        id="forget-container"
        style={{ display: "none" }}
      >
        <div class="alert alert-danger" id="forget-error-message" role="alert">
          {/* Please enter a valid email address! */}
        </div>
        <div class="forget-form">
          <h2>Forgot Password</h2>
          <form id="forget-form">
            <div class="mb-3">
              <label for="forget-email" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="forget-email"
                placeholder="Enter your registered email"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary btn-custom">
              Reset Password
            </button>
            <div class="mt-3 text-center">
              <a href="#" id="back-to-login-from-forget-link">
                Back to Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
