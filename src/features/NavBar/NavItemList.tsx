import React from "react";
import NavItem from "./NavItem";
import AppButton from "../../shared/components/AppButton";

const NavItemList = ()=>{
        return(
            <div className="flex items-center gap-16">  
                <NavItem title="Home" element="This is a test element." />
                <NavItem title="Skills" element="This is a test element." />
                <NavItem title="Projects" element="This is a test element." />
                <AppButton text="Connect" onClick={()=>{}}/>
            </div>
        )
}

export default NavItemList