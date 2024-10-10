import { useEffect, useState } from 'react';
import projectsData from '../../Database/projects.json'; 

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData.projects); 
    }, []);

  return (
    <div className=" container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.Id}
            className="border bg-slate-200 p-4 m-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <img
              src={project.image.src}
              alt={project.image.alt}
              className="w-full h-48 object-cover mb-4 cursor-pointer"
              onClick={() => window.open(project.link, "_blank")}
             
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
