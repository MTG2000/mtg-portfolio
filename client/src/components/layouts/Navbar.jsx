import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/nav.scss";

const Navbar = () => {
  useEffect(() => {
    const openBtn = document.querySelector(".open");
    openBtn.addEventListener("click", function() {
      this.classList.toggle("oppenned");
    });
  }, []);
  return (
    <div className="open">
      <span className="cls" />
      <span>
        <ul className="sub-menu bg-primary">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">My Projects</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </span>
      <span className="cls" />
    </div>
  );
};

export default Navbar;
