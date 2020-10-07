import React from 'react';
import "./contactme.css"

function ContactMe() {
    return (
        <div className="contact" id="sectionContact">
            <div className="header">
                <h1>Contact Me</h1>
            </div>
            <div className="details">
                <h4>Email: <a href="mailto:padraicheaton@gmail.com">padraicheaton@gmail.com</a></h4>
                <h4>Mobile: +61 418 678 484</h4>
            </div>
        </div>
    );
}

export default ContactMe;