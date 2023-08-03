import projects from './projects.json';

export type Technology = {
    name: string;
    color: string;
  };
  
export type Project = {
    projectName: string;
    description: string;
    imgUrl: string;
    technologiesUsed: Technology[];
    liveAppUrl:string;
    repoUrl:string;
  };
  
export type ProjectsResponse = Project[];
  

  export const getProjects = (): Promise<ProjectsResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(projects), 500); // Simulates network delay
    });
  };
