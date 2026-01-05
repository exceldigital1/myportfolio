import React from "react";
import myImage from "../assets/my-img.jpg";


function About() {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div className="about-content">
                <img src={myImage} alt="My Portrait" className="about-image" />
                <p>
                    Front-end developer with a background in Business Administration, experienced in HTML, CSS, and growing expertise in JavaScript. I focus on creating elegant, user-friendly web solutions and am eager to contribute to collaborative, remote-friendly teams.
                </p>
            </div>

        </section>
    );
}
export default About;