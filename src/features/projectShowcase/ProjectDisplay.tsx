import React from 'react';
import { Project } from '../../shared/utils/Readprojects';

const ProjectDisplay = ({ CurrentProject }: { CurrentProject: Project }) => {
  return (
    <div className='relative'>
        <div className='w-screen h-300 bg-cover blur' style={{backgroundImage:"url("+(CurrentProject.imgUrl) +")"}}>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl'>            
            <img src={CurrentProject.imgUrl} alt={CurrentProject.projectName} />
            <div className='flex gap-2'>
                {CurrentProject.technologiesUsed.map((tech) => (
                <span className="px-2 py-1 rounded-2xl text-white font-bold text-xs" style={{ background: tech.color }} key={tech.name}>
                    {tech.name}
                </span>
                ))}
            </div>
            <h2>{CurrentProject.projectName}</h2>
            <p>{CurrentProject.description}</p>
        </div>
    </div>
    
  );
};

export default ProjectDisplay;