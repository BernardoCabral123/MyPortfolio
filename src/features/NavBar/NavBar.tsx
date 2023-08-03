import React from "react";
import AppLogo from "./AppLogo";
import NavItemList from "./NavItemList";

const NavBar = ()=>{
        return(
            <div className="sticky top-0 left-0 z-20 w-screen p-3 flex justify-center bg-white">  
                <div className="w-300 flex justify-between">
                    <AppLogo/>
                    <NavItemList/>
                </div>
            </div>
        )
}

export default NavBar