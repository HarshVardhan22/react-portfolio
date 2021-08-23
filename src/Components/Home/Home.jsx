import React from "react";
import Navbar from "../Navbar/Navbar"
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div className={styles.container}>
   
   
      {/* <Navbar/> */}
        <div className={styles.intro}>
          <h1>
            Hi,my name is <span className={styles.textBig}>Harshvardhan</span>
          </h1>
          <h1>
            I am a <span className={styles.textBig}>Web Developer</span>
          </h1>
        </div>
    
   
        <div className={styles.project}>
          <div className={styles.left}>
            <h1>
              I can fit your{" "}
              <span className={styles.textBig}>beautiful ideas</span>
            </h1>
            <h1>
              into your<span className={styles.textBig}>screens</span>
            </h1>
            <Link to="/projects">My Projects</Link>
          </div>
          <div className={styles.right}>
            react icons here, with smiley wala styling
          </div>
        </div>
    
   
        <div className={styles.blog}>
        <div className={styles.left}>
            <h1>
              I love to spread 
              <span className={styles.textBig}>knowledge</span>
            </h1>
            <h1>
              as much as I can, so I write<span className={styles.textBig}>Blogs</span>
            </h1>
            <Link to="/blogs">My blogs</Link>
          </div>
          <div className={styles.right}>
            react icons here, with smiley wala styling
          </div>
        <Footer/>
        </div>
    
    </div>
  );
};

export default Home;
