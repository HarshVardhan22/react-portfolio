import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
const Home = () => {
  const [title, setTitle] = useState([
    "Web Developer",
    "Blogger",
    "Software Developer",
    "Electronics Engineer",
  ]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((prevState) => prevState + 1);
      if (index === 3) setIndex(0);
    }, 500);
    return () => clearInterval(interval);
  }, [index]);
  return (
    <div className={styles.container}>
      {/* <Navbar/> */}
      <Bounce right>
        <div className={styles.intro}>
          <h1>
            Hi, my name is <span className={styles.textBig}>Harshvardhan</span>
          </h1>
          <h1>
            I am a{" "}
            <Fade bottom>
              <span className={styles.textBig}>{title[index]}</span>
            </Fade>
          </h1>
        </div>
      </Bounce>

      <Bounce right>
        <div className={styles.project}>
          <div className={styles.left}>
            <h1>
              I can fit your{" "}
              <span className={styles.textBig}>beautiful ideas</span>
            </h1>
            <h1>
              into your <span className={styles.textBig}>screens</span>
            </h1>
            
            <Link to="/projects"><button className="linkBtn">My Projects</button></Link>
          </div>
          {/* <div className={styles.right}>
            react icons here, with smiley wala styling
          </div> */}
        </div>
      </Bounce>
      <Bounce right>
        <div className={styles.blog}>
          <div className={styles.left}>
            <h1>
              I love to spread <span className={styles.textBig}>knowledge</span>
            </h1>
            <h1>
              as much as I can, so I write{" "}
              <span className={styles.textBig}>Blogs</span>
            </h1>
            <Link to="/blogs"><button className="linkBtn">My Blogs</button></Link>
          </div>
          {/* <div className={styles.right}>
            react icons here, with smiley wala styling
          </div> */}
        </div>
      </Bounce>
    </div>
  );
};

export default Home;
