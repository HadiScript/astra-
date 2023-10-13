import React from "react";
import Navbar from "../components/partials/Navbar";
import ProjectsComponent from "../components/Projects";
import Breadcrumbs from "../components/Breadcrumbs";
import { projects_data } from "../assets/data/projects_data";

const Projects = () => {
  return (
    <>
      <Navbar navClass="justify-end nav-light" />
      <Breadcrumbs _title="Our Projects" _from="Projects" />
      <ProjectsComponent data={projects_data} limit={6} />
    </>
  );
};

export default Projects;
