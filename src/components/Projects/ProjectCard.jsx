import React from "react";
import { getImageUrl } from "../../utils"

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
    return(
        <div>
            <img src={getImageUrl(imageSrc)} alt={`This is ${title}`}></img>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {
                    skills.map((skill, id) => (
                        <li key={id}>{skill}</li>
                    ))
                }
            </ul>
            <div>
                <a href={demo}>Demo</a>
                <a href={source}>Source</a>
            </div>
        </div>
                                
    )

}