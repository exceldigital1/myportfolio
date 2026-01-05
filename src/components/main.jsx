import React from "react";

function Main() {
    return (
        <main id="main">
            <div>
                <h1>Hi, I'm Saheed, A frontend Developer</h1>
                <p>I build accessible, inclusive products and digital experiences for the web.</p>
                <div className="main-links">
                    <a id="my-work" href="">View My Work</a>
                    <a id="my-cv" href="">Download CV</a>
                </div>
            </div>
            <img src="https://bairesdev.mo.cloudinary.net/blog/2022/08/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156-1.jpg?tx=w_1920,q_auto" alt="Developer at work" />
        </main>
    );
}

export default Main;
