import React from 'react';
import "./skills.css"

//Images
import Unity from '../images/unity.png';
import UE4 from '../images/ue4.png';
import CSharp from '../images/csharp.png';
import CPP from '../images/cpp.png';
import Python from '../images/python.png';
import Javascript from '../images/javascript.png';
import ReactImg from '../images/react.png';
import Github from '../images/github.png';

function Skills() {
    return (
        <div className="skills" id="sectionSkills">
            <div className="header">
                <h1>Skills</h1>
            </div>
            <ul>
                <div className="technology">
                    <img src={Unity} alt="Unity Logo" />
                    <h3>Unity</h3>
                </div>
                <div className="technology">
                    <img src={UE4} alt="Unreal Engine 4 Logo" />
                    <h3>Unreal Engine 4</h3>
                </div>
                <div className="technology">
                    <img src={CSharp} alt="C# Logo" />
                    <h3>C#</h3>
                </div>
                <div className="technology">
                    <img src={CPP} alt="C++ Logo" />
                    <h3>C++</h3>
                </div>
                <div className="technology">
                    <img src={Python} alt="Python Logo" />
                    <h3>Python</h3>
                </div>
                <div className="technology">
                    <img src={Javascript} alt="Javascript Logo" />
                    <h3>JavaScript</h3>
                </div>
                <div className="technology">
                    <img src={ReactImg} alt="ReactJS Logo" />
                    <h3>ReactJS</h3>
                </div>
                <div className="technology">
                    <img src={Github} alt="Github Logo" />
                    <h3>GitHub</h3>
                </div>
            </ul>
        </div >
    );
}

export default Skills;