import React from 'react'
import Category from './Category';
import Briefcase from '../../assets/images/briefcase.svg'
import RocketLaunch from '../../assets/images/rocketLaunch.svg'
import Headset from'../../assets/images/headset.svg'

const BarSection = ()=>{
    return (
        <div className='relative flex justify-center items-center w-full h-72 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-200 to-neutral-100'>
            <div className="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='flex gap-4 z-10'>
                <Category imgSource={Briefcase} imgAlt='' title='Experience' subtitle='2 years'/>
                <Category imgSource={RocketLaunch} imgAlt='' title='Projects' subtitle='3 projects'/>
                <Category imgSource={Headset} imgAlt='' title='Availability' subtitle='24/7'/>
            </div>
        </div>
    )
}

export default BarSection;
