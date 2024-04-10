import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () =>{
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.avif")} className={styles.aboutImage}></img>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")}></img>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>As a seasoned Frontend Developer, I excel in crafting responsive and optimized websites that captivate users.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")}></img>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I bring expertise in crafting high-speed and optimized backend systems and APIs, ensuring seamless performance and efficiency.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")}></img>
                        <div className={styles.aboutItemText}>
                            <h3>UI/UX Designer</h3>
                            <p>I've crafted multiple landing pages and established robust design systems, enhancing visual consistency and elevating user experiences across diverse projects.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}