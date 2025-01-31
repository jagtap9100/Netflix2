import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../style/Nav.css";
import { CiUser } from "react-icons/ci";

export default function Navbar() {
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
                <a href="/">Home</a>
              </li>
              <li>
                <a>TV Shows</a>
              </li>
              <li>
                <a>Movies</a>
              </li>
              <li>
                <a>My List</a>
              </li>
              <li>
                <Link to="/user">
                  <CiUser style={{ fontSize: "2rem" }} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
