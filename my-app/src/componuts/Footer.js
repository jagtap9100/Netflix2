import React from "react";
import "../style/Footer.css";
export default function Footer() {
  return (
    <>
      <footer class="big-netflix-footer">
        <div class="footer-container">
          <div class="footer-top">
            <a href="#" class="footer-logo">
              Netflix
            </a>
          </div>
          <div class="footer-sections">
            <div class="footer-column">
              <h4>About Us</h4>
              <a href="#">Investor Relations</a>
              <a href="#">Corporate Information</a>
              <a href="#">Jobs</a>
            </div>
            <div class="footer-column">
              <h4>Help</h4>
              <a href="#">FAQ</a>
              <a href="#">Help Center</a>
              <a href="#">Contact Us</a>
            </div>
            <div class="footer-column">
              <h4>Legal</h4>
              <a href="#">Terms of Use</a>
              <a href="#">Privacy</a>
              <a href="#">Cookie Preferences</a>
            </div>
            <div class="footer-column">
              <h4>Connect</h4>
              <a href="#">Media Center</a>
              <a href="#">Ways to Watch</a>
              <a href="#">Netflix Originals</a>
            </div>
          </div>
          <div class="footer-bottom">
            <p>© 2025 Netflix, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
