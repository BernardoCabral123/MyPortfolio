import React, { useEffect, useState } from 'react';
import { getProjects, Project } from '../../shared/utils/Readprojects';
import ProjectDisplay from './ProjectDisplay';

const ProjectShowcaseSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [iterator, setIterator] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (projects.length) {
        setIterator((prevIterator) => (prevIterator + 1) % projects.length);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [projects]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects</div>;

  return (
    <div>
      {projects.length > 0 ? (
        <ProjectDisplay CurrentProject={projects[iterator]} />
      ) : (
        <div>No projects to display</div>
      )}
    </div>
  );
};

export default ProjectShowcaseSection;
