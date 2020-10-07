import React from 'react';
import "./App.css";
import Projects from "./components/projects"
import TopBar from "./components/topbar"
import ContactMe from "./components/contactme"
import Skills from "./components/skills"
import ExpandArrow from './images/expandarrow.png'

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="welcome">
        <div className="title">
          <h1>Padraic Heaton</h1>
          <ul className="mobileHidden">
            <li>Programmer</li>
            <li>|</li>
            <li>Game Designer</li>
            <li>|</li>
            <li>Web Dev</li>
          </ul>
        </div>
        <div className="seeprojects">
          <h3>Have a Look</h3>
          <img src={ExpandArrow} alt="Expand Arrow" />
        </div>
      </div>

      <Skills />

      <h5 className="note">This website was created using ReactJS</h5>

      <Projects />

      <ContactMe />

    </div>
  );
}

export default App;
