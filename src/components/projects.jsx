import React from "react";
import laundry from "../assets/laundry.png";
import ProjectCard from "./projectCard";
import calculator from "../assets/calculator.png";
import meal from "../assets/meal-generator.png";


const projects = [
    { image: laundry, title: "Laundry Website", skills: ["HTML", "CSS", "JS"] },
    { image: calculator, title: "Calculator App", skills: ["HTML", "CSS", "JS"] },
    { image: meal, title: "Meal Generator", skills: ["HTML", "CSS", "JS"] },
];

function Projects() {
    return (
        <div id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((p, i) => (
                    <ProjectCard
                        key={`${p.title}-${i}`}
                        image={p.image}
                        title={p.title}
                        skills={p.skills}
                        index={i}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;