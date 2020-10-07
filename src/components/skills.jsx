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
        <div className="skills">
            <div className="header">
                <h1>Skills</h1>
            </div>
            <ul>
                <img src={Unity} alt="Unity Logo" />
                <img src={UE4} alt="Unreal Engine 4 Logo" />
                <img src={CSharp} alt="C# Logo" />
                <img src={CPP} alt="C++ Logo" />
                <img src={Python} alt="Python Logo" />
                <img src={Javascript} alt="Javascript Logo" />
                <img src={ReactImg} alt="ReactJS Logo" />
                <img src={Github} alt="Github Logo" />
            </ul>
        </div >
    );
}

export default Skills;