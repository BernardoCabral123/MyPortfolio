import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import WelcomeSection from './features/welcome/WelcomeSection';
import NavBar from './features/NavBar/NavBar';
import BarSection from './features/barSection/BarSection';
import ProjectShowcaseSection from './features/projectShowcase/ProjectShowcaseSection';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='text-textColor flex flex-col gap-8 items-center'>
    <NavBar/>
    <WelcomeSection/>
    <BarSection/>
    <ProjectShowcaseSection/>
    </div>

  </React.StrictMode>
);
