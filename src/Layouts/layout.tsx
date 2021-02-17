import React from "react";
import Services from "../pages/services";

export default function Layout({children}:any){

    return (
        <div style={{width: '90%', padding: '20px'}}>

           <Services  />

           <div style={{float: 'right', padding: '30px',width: '50%',textAlign: 'left'}}>
           {children}
           </div>
        </div>
    )
}