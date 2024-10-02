import { useEffect, useState } from 'react';
import projectsData from '../../Database/projects.json'; 

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData.projects); // Set the data from the imported JSON
    }, []);

  return (
    <div className="text-white container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Projects List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.Id}
            className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <img
              src={project.image.src}
              alt={project.image.alt}
              className="w-full h-48 object-cover mb-4"
            />
            <a
              href={project.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* {project.link} */}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
