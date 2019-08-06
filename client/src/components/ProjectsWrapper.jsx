import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import Loading from "./Loading";

const ProjectsWrapper = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const result = await axios.get("/api/projects");
        if (result.data.success) {
          const data = await result.data.projects;
          setProjects(data);
        } else {
          console.log("Not able to get data");
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  if (loading) return <Loading width={150} />;

  return (
    <React.Fragment>
      <div className="row justify-content-around py-5">
        {projects.map(p => (
          <ProjectCard {...p} key={p.id} />
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
