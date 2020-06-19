import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsWrapper = ({ projects = [] }) => {
  if (projects.length === 0)
    return <p className=" text-center h3 text-white mt-6">No Projects Found</p>;
  return (
    <React.Fragment>
      <div className="row justify-content-around py-5">
        {projects.map((p) => (
          <ProjectCard {...p} key={p._id} />
        ))}
      </div>
      <p className="text-white mt-6">
        NOTE : some of my first websites are just front end & design , thats why
        they are static. full stack websites are tagged with Back-End Or NodeJs
      </p>
    </React.Fragment>
  );
};

export default ProjectsWrapper;
