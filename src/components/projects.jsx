import React from 'react';
import "./projects.css";

//Components
import Work from "./work";

//Images
import Deadline from "../images/deadline.png";
import Shapeshifter from "../images/shapeshifter.png";
import Jason from "../images/jasonassistant.JPG";
import FirstWebsite from "../images/firstwebsite.png";
import MsPacMan from "../images/mspacman.png";

function Projects() {
    return (
        <div className="main" id="sectionProjects">
            <div className="header">
                <h1>Projects</h1>
            </div>
            <div className="projects">
                <Work name="Jason Assistant" date="2020" imgurl={Jason} link="https://github.com/padraicheaton/jasonassistant" desc=
                    "An online assistant I created in my spare time, integrated with Telegram (to send and recieve messages), IFTTT (to control my bedroom lights), all running on a Raspberry Pi. Click to see the github page where I have keep an up-to-date list of this assistant's functionality" />
                <Work name="Deadline" date="2020" imgurl={Deadline} link="https://pheaton.itch.io/deadline" desc=
                    "A digital game made using the Unity game engine, created for Introduction to Computer Game Design in my third semester at UTS. Voted best in subject for Summer 2020 in the UTS Games Exhibition. Use the newly found very useful (and not dangerous) side effects of coffee to race across the city and hand in your assignment in this new take on the puzzle platformer genre" />
                <Work name="Shapeshifter" date="2020" imgurl={Shapeshifter} link="https://tabletopia.com/playground/shapeshiftergame-fkpxy5/play-now" desc=
                    "A board game made using Tabletopia, created for Introduction to Computer Game Design. Exhibited in the UTS Games Exhibition. Deceive your friends or work together to repair the ship in this fast-paced game for survival " />
                <Work name="Ms. Pac-Man Recreation" date="2019" imgurl={MsPacMan} link="https://pheaton.itch.io/mspacmanrecreation" desc=
                    "A digital game made using the Unity game engine, created for Introduction to Computer Game Development in my second semester at UTS. This was my first time ever putting together a serious game project, and I am very happy with how it turned out. Click to see the itch.io page for a more in-depth explanation and to play the game!" />
                <Work name="First Website" date="2019" imgurl={FirstWebsite} link="http://www-student.it.uts.edu.au/~pheaton/websystems/index.html" desc=
                    "My First Website I created during my Web Systems subject. It was my first introduction to raw HTML and CSS, created and edited through the Vim text editor and hosted online by UTS. The whole development process took place on the command line using an SSH connection to the web server, then editing the files throug Vim" />
            </div>
        </div>
    );
}

export default Projects;