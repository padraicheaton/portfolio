import React from 'react';
import "./work.css"

function Work(props) {
    return (
        <a className="work" href={props.link} target="_blank">
            <h1>{props.name}</h1>
            <h5>{props.date}</h5>
            <div className="line"></div>
            <div className="mainwork">
                <img src={props.imgurl} />
                <p>{props.desc}</p>
            </div>
        </a>
    );
}

export default Work;