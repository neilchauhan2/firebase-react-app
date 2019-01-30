import React from "react";

function ProjectSummary({ project }) {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by: Neil Chauhan</p>
        <p className="grey-text">27th Jan, 6pm</p>
      </div>
    </div>
  );
}

export default ProjectSummary;
