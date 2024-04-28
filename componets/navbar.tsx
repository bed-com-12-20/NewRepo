
"use client";
import "./nav.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faTools,
  faInfoCircle,
  faShoppingCart,
  faCog,
  faUserDoctor,
  faHospital,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
// import './globals.css';
import icon from "../app/images/icon.png";
import Image from "next/image";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    // Toggle the "change" class on the menu icon and bars
    const menuIcon = document.querySelector(".menu-icon");
    const bars = document.querySelectorAll(".bar");
    //menuIcon.classList.toggle("change");
    // Check if menuIcon is not null before performing operations
    if (menuIcon !== null) {
      menuIcon.classList.toggle("change");
    }
    bars.forEach((bar) => bar.classList.toggle("change"));
  };

  return (
    <div className="header">
      <Image src={icon} width={50} height={50} alt="" />
      <div
        className={`menu-icon ${showLinks ? "change" : ""}`}
        onClick={toggleLinks}
      >
        <span id="menu">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </span>{" "}
        {/* This is the hamburger menu icon */}
      </div>
      {showLinks && (
        <div className="new-links">
          <a className="links" href="/">
            <FontAwesomeIcon icon={faHome} className="my-icon1" /> Home
          </a>
          <a className="links" href="Patient">
            <FontAwesomeIcon icon={faUserFriends} className="my-icon1" />
            Patients & Visitors
          </a>
          <a className="links" href="/departments">
            <FontAwesomeIcon icon={faTools} className="my-icon1" /> Departments
          </a>
          <a className="links" href="/Staff">
            <FontAwesomeIcon icon={faUserDoctor} className="my-icon1" /> Staff
          </a>
          <a className="links" href="/AboutUs">
            <FontAwesomeIcon icon={faInfoCircle} className="my-icon1" /> About
            Us
          </a>
        </div>
      )}
      <div className="nav-links">
        <a className="links" href="../">
          <FontAwesomeIcon icon={faHome} className="my-icon1" />
          Home
        </a>
        <a className="links" href="Patient">
          {" "}
          <FontAwesomeIcon icon={faUserFriends} className="my-icon1" />
          Patients and Visitors
        </a>
        <a className="links" href="/Staff">
          {" "}
          <FontAwesomeIcon icon={faUserDoctor} className="my-icon1" /> Staff
        </a>
        <a className="links" href="/departments">
          {" "}
          <FontAwesomeIcon icon={faHospital} className="my-icon1" />
          Departments
        </a>
        <a className="links" href="/AboutUs">
          {" "}
          <FontAwesomeIcon icon={faInfoCircle} className="my-icon1" /> About Us
        </a>
      </div>
      <div className="button">
        <a href="Appointment">
          <button>Book Appointment</button>
        </a>
      </div>
    </div>
  );
}
