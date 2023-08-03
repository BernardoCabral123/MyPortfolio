import React from 'react'

interface SocialMediaImageProps{
    imgSource:string;
    imgAlt:string;
    destinyUrl:string;
}

const SocialMediaImage = ({imgSource,imgAlt,destinyUrl}:SocialMediaImageProps)=>{
    return (
        <div className='w-8 h-8 cursor-pointer' onClick={()=>{window.open(destinyUrl, '_blank');}}>
            <img src={imgSource} alt={imgAlt} />
        </div>
    )
}

export default SocialMediaImage