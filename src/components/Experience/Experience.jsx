import React from "react";
import styles from "./Experience.module.css";
import skills from "../../Data/skills.json";
import history from "../../Data/history.json"
import { getImageUrl } from "../../utils";

export const Experience = () =>{
    return(
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {
                    skills.map((skill, id)=>{
                        return (<div className={styles.skill} key={id}>
                            <div className={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} alt={skill.title}></img></div>
                            <p>{skill.title}</p>
                        </div>
                        );
                    })
                    }
                </div>
                <ul className={styles.history}>
                    {
                        history.map((historyList, id) => {
                            return(
                                <li key={id} className={styles.historyItem}>
                                    <img src={getImageUrl(historyList.imageSrc)}></img>
                                    <div className={styles.historyItemDetails}>
                                        <h3>{`${historyList.role},${historyList.organisation}`}</h3>
                                        <p>{`${historyList.startDate}-${historyList.endDate}`}</p>
                                        <ul>{historyList["Skills Gained"].map((experience, id)=>{
                                            return(
                                                <li key={id}>{experience}</li>
                                            )
                                        })}</ul>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}