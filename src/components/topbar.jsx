import React from 'react';
import "./topbar.css";
import Resume from "./resume.pdf"

function TopBar() {
    return (
        <div className="topbar">
            <a href="#sectionProjects">Projects</a>
            <a href="#sectionContact">Contact</a>
            <a href={Resume} target="_blank">Resumé</a>
        </div>
    );
}

export default TopBar;