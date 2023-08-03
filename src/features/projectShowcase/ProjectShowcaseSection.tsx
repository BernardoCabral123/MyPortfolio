import React, {useCallback ,useEffect, useState } from 'react';
import { getProjects, Project } from '../../shared/utils/Readprojects';
import ProjectDisplay from './ProjectDisplay';
import ArrowSrc from '../../assets/images/arrow.svg'

const ProjectShowcaseSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [iterator, setIterator] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const changeProjectOnInterval = () => {
    if (projects.length) {
      setIterator((prevIterator) => (prevIterator + 1) % projects.length);
    }
  };

  const goToNextProject = useCallback(() => {
    setIterator((prevIterator) => (prevIterator + 1) % projects.length);
  }, [projects.length]);

  const goToPreviousProject = useCallback(() => {
    setIterator((prevIterator) => (prevIterator - 1 + projects.length) % projects.length);
  }, [projects.length]);

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
    if (intervalId !== null) {
      clearInterval(intervalId);
    }

    const newIntervalId = window.setInterval(changeProjectOnInterval, 5000);
    setIntervalId(newIntervalId);

    return () => {
      clearInterval(newIntervalId);
    };
  }, [projects, iterator]);

  const selectProject = (index: number) => {
    setIterator(index);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects</div>;

  return (
    <div className='relative'>
      {projects.length > 0 ? (
        <ProjectDisplay currentProject={projects[iterator]}/>
      ) : (
        <div>No projects to display</div>
      )}
      <button className="absolute top-1/2 left-16 -translate-y-1/2 transition hover:brightness-90 cursor-pointer" onClick={goToPreviousProject}>
          <img className="rotate-180" src={ArrowSrc} alt="Arrow left" />
      </button>
      <button className="absolute top-1/2 right-16 -translate-y-1/2 transition hover:brightness-90 cursor-pointer" onClick={goToNextProject}>
          <img src={ArrowSrc} alt="Arrow right" />
      </button>

      <div className='absolute flex gap-3 bottom-8 left-1/2 -translate-x-1/2'>
        {projects.map((project, index) => (
          <button key={index} className={'h-8 w-8 hover:brightness-90 cursor-pointer rounded-full drop-shadow '+ (index == iterator ? "bg-gradient-to-br from-darkerOrange to-lighterOrange " : "bg-white")} onClick={() => selectProject(index)}></button>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcaseSection;