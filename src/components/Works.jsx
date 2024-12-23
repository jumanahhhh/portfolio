import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants"; // Import project data

const Works = () => {
  return (
    <section className="py-20 px-5">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <h2 className="text-3xl font-bold">My Projects</h2>
        <p className="mt-3 text-lg text-gray-500">
          Here are some of the projects I have worked on.
        </p>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
