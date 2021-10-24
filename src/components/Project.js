import '../styles/style.css'
import React from 'react'

function Project(props) {

  return (
    <li>
      <a href={props.source} target="_blank" rel="noreferrer" className="Project">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.technology}</p>
        <p>{props.date}</p>
      </a>
    </li>
  );
}


export default Project;