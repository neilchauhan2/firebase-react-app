import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit omnis unde asperiores et, delectus aliquam consequatur
            molestias sit, autem dolor provident totam officiis accusantium vero
            optio, culpa mollitia tempore ea pariatur atque aut in at? Laborum
            hic optio dolorem tempore nostrum, quam veniam at maiores eligendi
            quasi sit eum sunt dolorum eveniet odit adipisci quo repellat minima
            laudantium delectus earum mollitia in magnam quidem? Nihil eaque
            placeat ad unde quibusdam. Aliquid sapiente sunt harum, a nulla,
            dolore laboriosam eveniet, libero deserunt maxime voluptatum illo
            vero eaque? Illo sapiente maiores, inventore sit perspiciatis
            numquam optio, aperiam tempora nemo earum officiis ea!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by: Neil Chauhan</div>
          <div>27th Jan, 10pm</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
