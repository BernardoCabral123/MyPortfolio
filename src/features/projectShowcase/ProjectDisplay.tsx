import React from 'react';
import { Project } from '../../shared/utils/Readprojects';
import GithubSrc from '../../assets/images/github.svg';
import PlaySrc from '../../assets/images/play.svg'
import SvgCode from '../../shared/components/SvgCode'


const ProjectDisplay = ({currentProject}: {currentProject:Project} ) => {
  return (
    <div className='relative'>
        <div className='w-screen h-300 bg-cover blur' style={{backgroundImage:"url("+(currentProject.imgUrl) +")"}}>
        </div>
        <div className='w-280 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  overflow-hidden rounded-2xl drop-shadow'>            
            <img src={currentProject.imgUrl} alt={currentProject.projectName} />
            <div className='relative p-4 flex flex-col gap-2'>
                <div className='flex gap-2'>
                  {currentProject.technologiesUsed.map((tech) => (
                  <span className="px-2 py-1 rounded-2xl text-white font-bold text-xs" style={{ background: tech.color }} key={tech.name}>{tech.name}</span>
                ))}
            </div>
            <h2 className='font-bold'>{currentProject.projectName}</h2>
            <p className=' h-12 line-clamp-2'>{currentProject.description}</p>
            <div className="absolute right-8 -top-16 flex gap-3">


              {
                currentProject.liveAppUrl != "" ?
                (<div className="h-10 w-10 rounded-full flex items-center justify-center bg-gradient-to-br from-darkerOrange to-lighterOrange hover:brightness-90 cursor-pointer" onClick={()=>{window.open(currentProject.liveAppUrl, '_blank');}}>
                  <div className='h-5 w-5 fit-svg fill-primary'>
                    <SvgCode svgUrl={PlaySrc} />
                  </div>
                </div>)
              :null
              }

              {currentProject.repoUrl != "" ?               
                (<div className="p-0.5 h-10 w-10 rounded-full bg-gradient-to-br from-darkerOrange to-lighterOrange  hover:brightness-90 cursor-pointer "  onClick={()=>{window.open(currentProject.repoUrl, '_blank');}}>
                  <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                    <div className='h-5 w-5 fit-svg fill-primary'>
                      <SvgCode svgUrl={GithubSrc} />
                      </div>
                  </div>
                </div>) 
              :null}     

            </div>

            </div>

        </div>
    </div>
    
  );
};

export default ProjectDisplay;