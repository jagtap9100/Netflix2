import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../style/Nav.css";
const btn1 = {
  padding: " 14px 22px",
  fontSize: "1rem",
  lineHeight: "1.5",
  border: "none",
  outline: "none",
  borderRadius: "10px",
  cursor: "pointer",
  marginTop: "1rem",
  background: "red",
  marginLeft: "2rem",
  color: "white",
  textdecoration: "none",
};
export default function SigninNav() {
  const [show, setHandleshow] = useState(false);

  const trasitionhanle = () => {
    if (window.scrollY > 50) {
      setHandleshow(true);
    } else {
      setHandleshow(false);
    }
  };
  useEffect(() => {
    console.log("window.scrollY", window.scrollY);
    window.addEventListener("scroll", trasitionhanle);
    return () => {
      window.removeEventListener("scroll", trasitionhanle);
    };
  }, []);
  return (
    <>
      <div>
        <div
          className={`nav-container  ${
            show && "nav_black"
          } nav_top   flex p-5  justify-between items-center  flex-row backnav`}
        >
          <div className="nav-logo">
            <a href="/">
              <img
                src="/Netflix_Logomark.png"
                className={`"nav-container ${show && "nav_black"} w-40`}
                alt="Netflix logo"
              />
            </a>
          </div>
          <div className="nav-menu ">
            <ul
              className={` ${
                show && "nav_black text-black"
              } flex gap-5 text-white cursor-pointer flex-row`}
            >
              <li>
                <a className="text-white" href="/">
                  English
                </a>
              </li>

              <li>
                <Link style={btn1} to="/user">
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
