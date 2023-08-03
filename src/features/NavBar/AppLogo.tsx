import React from "react";
import appLogo from "../../assets/images/appLogo.svg"


const AppLogo = ()=>{
        return(
            <div className="w-20">
                <img src={appLogo}  alt="Aplication logo" />
            </div>
        )
}

export default AppLogo;