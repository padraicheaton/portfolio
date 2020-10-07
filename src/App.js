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
            <li>Web Developer</li>
          </ul>
        </div>
        <a className="note" href="https://github.com/padraicheaton/portfolio" target="_blank">This website was created using ReactJS, click to see its GitHub Page</a>
        <div className="seeprojects">
          <h3>Have a Look</h3>
          <img src={ExpandArrow} alt="Expand Arrow" />
        </div>
      </div>

      <Skills />

      <Projects />

      <ContactMe />

    </div>
  );
}

export default App;
