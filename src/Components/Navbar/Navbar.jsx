import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/">Home</Link>
      </div>

      <div className={styles.links}>
        <div>
          <Link to="/projects">Projects</Link>
        </div>

        <div>
          <Link to="/blogs">Blogs</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
