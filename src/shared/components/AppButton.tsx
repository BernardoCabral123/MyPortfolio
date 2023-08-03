import React,{ReactElement} from "react"

interface AppButtonProps{
    text:string;
    onClick: ()=> void;
}

const AppButton = ({text,onClick}:AppButtonProps): ReactElement =>{
    return (
        <button className="rounded-xl py-pyButton px-8 bg-gradient-to-br from-darkerOrange to-lighterOrange font-bold text-white hover:brightness-90 transition" onClick={onClick}>{text}</button>
    )
}

export default AppButton