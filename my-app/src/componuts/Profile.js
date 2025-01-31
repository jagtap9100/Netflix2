import React from "react";
import Navbar from "./Navbar";
import "../style/Prifile.css";
import PlanScreen from "./PlanScreen";
export default function profile() {
  return (
    <>
      <Navbar />
      <div class="landing">
        <div class="profile">
          <div class="left">
            <div class="img">
              <img
                src="https://i.postimg.cc/9wbwLtkT/avatar-05.png"
                alt="avatar-05"
              />
            </div>
            <p class="level">Abhishek jagtap</p>
            <p class="lev"></p>
          </div>
          <div class="right">
            <h3 className="p-5" style={{ fontSize: "4rem" }}>
              Abhishek jagtap
            </h3>
          </div>
        </div>
        <PlanScreen />
      </div>
    </>
  );
}
