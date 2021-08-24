import React from 'react'
import blogData from "../../Asset/blogData";
import Bounce from "react-reveal/Bounce";
import styles from "./Blogs.module.css";

const Blogs = () => {
    return (
        <div className={styles.container}>
        <div className={styles.miniCont}>
          {blogData.map((item, key) => {
            return (
              <Bounce right>
                <div className={styles.card}>
                 
                  
                  <h2>{item.title}</h2>
                    <button className={styles.goto}>
                      <a href={item.liveLink}>Live Link</a>
                    </button>
                  
                  <h5>{item.description}</h5>
                </div>
              </Bounce>
            );
          })}
        </div>
      </div>
    )
}

export default Blogs
