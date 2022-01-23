import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';


function Drawer(){
    return(
        <div style={{width: '12vw', height: '94vh', backgroundColor: 'rgb(15,15,15)', color: 'white' }}>
            <div style={{height: '5vh', paddingTop: '1.5vh', marginBottom: '0.25vh',  marginLeft: '1vw'}}><HomeIcon style={{fontSize: 'calc(0.75vh + 0.75vw)', position: 'relative', top: '0.4vh'}}/> Home</div>
            <div style={{height: '5vh', paddingTop: '1.5vh', marginBottom: '0.25vh',  marginLeft: '1vw'}}><DashboardIcon style={{fontSize: 'calc(0.75vh + 0.75vw)', position: 'relative', top: '0.4vh'}}/> Device Dashboard</div>
        </div>
    )
}

export default Drawer