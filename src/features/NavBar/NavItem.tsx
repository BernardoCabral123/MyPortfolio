import React, { ReactElement } from 'react';

interface MyComponentProps {
    title: string;
    element: string;
    
  }
const NavItem = ({title,element}:MyComponentProps): ReactElement=>{
    console.log(element);
        return(
            <div className="font-bold cursor-pointer hover:text-primary transition">
                <span>{title}</span>
            </div>
        )
}

export default NavItem