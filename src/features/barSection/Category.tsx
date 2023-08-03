import React, { ReactElement } from 'react'

interface CategoryProps{
    imgSource:string,
    imgAlt:string,
    title:string;
    subtitle:string;
}

const Category  = ({imgSource,imgAlt,title,subtitle}:CategoryProps): ReactElement => {
    return (
            <div className='w-52 h-40 bg-white rounded-xl border-2 border-stone-200 flex flex-col justify-center items-center gap-2'>
                <div className='w-12 h-12'>
                    <img src={imgSource} alt={imgAlt}/>
                </div>
                <div className='font-bold'>{title}</div>
                <div>{subtitle}</div>
            </div> 
            );
}

export default Category;