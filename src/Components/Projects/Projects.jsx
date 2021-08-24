import React from "react";
import projectData from "../../Asset/projectData";
import Bounce from "react-reveal/Bounce";
import styles from "./Projects.module.css";
const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.miniCont}>
        {projectData.map((item, key) => {
          return (
            <Bounce right>
              <div className={styles.card}>
                <h2>{item.title}</h2>
                <div className={styles.link}>
                  <button className={styles.goto}>
                    <a href={item.gitLink}>Github Link</a>
                  </button>

                  <button className={styles.goto}>
                    <a href={item.liveLink}>Live Link</a>
                  </button>
                </div>
              </div>
            </Bounce>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
