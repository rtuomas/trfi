import React from 'react';
import '../styles/style.css'
import Project from './Project'

function Projects({projects}) {

  return (
    <div className="Projects">
      <div className="Projectlist">

        <h1>Projects here</h1>

        {projects.map(project =>
            <Project
              key={project._id ? project._id : Math.random()}
              name={project.name}
              description={project.description}
              technology={project.technology}
              date={project.date}
              source={project.source}
            />
          )}
      </div>



    </div>
  );
}

export default Projects;