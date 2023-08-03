import React from 'react'
import AppButton from '../../shared/components/AppButton';
import SocialMediaImage from './SocialMediaImage';
import LinkedinSrc from '../../assets/images/linkedin.svg';
import GithubSrc from '../../assets/images/github.svg';


const WelcomeMessageWithLinks = ()=>{

    return (<div className='flex flex-col gap-4 justify-center w-1/2'>
                <div className='text-4xl font-bold'>
                    <div>
                        <span className='text-primary'>Bernardo Cabral</span>
                        <span> here!</span>
                    </div>
                    <div>
                        <span>Developing apps that solve real life problems</span>
                    </div>
                </div>
                <div>
                    <span>Passionate Full Stack Developer who believes in the power of user-focused design and clean code.</span>
                    </div>
                <div className='flex gap-4 items-center'>
                    <AppButton text='Download CV' onClick={()=>{}}/>
                    <SocialMediaImage imgSource={LinkedinSrc} imgAlt='Linkedin Redirection logo' destinyUrl='https://youtube.com'/>
                    <SocialMediaImage imgSource={GithubSrc} imgAlt='Github Redirection logo' destinyUrl='https://twitter.com'/>
                </div>
            </div>)
}

export default WelcomeMessageWithLinks;