import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./styles/nav.module.scss";

const Navbar = () => {
  useEffect(() => {
    const openBtn = document.querySelector(`.${styles.open}`);
    openBtn.addEventListener("click", function () {
      this.classList.toggle(styles.oppenned);
    });
  }, []);
  return (
    <div className={styles.open}>
      <span className="cls" />
      <span>
        <ul className={`${styles.subMenu} bg-primary`}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>My Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Me</a>
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </span>
      <span className="cls" />
    </div>
  );
};

export default Navbar;
