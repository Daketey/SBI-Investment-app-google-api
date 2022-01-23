import React from "react";
import {useDispatch} from "react-redux";
//import "./Header.css";

function Header(){
    const dispatch = useDispatch();
    return(
        <div style={{width: '100vw', height: '6vh', backgroundColor: '#01b6f0'}} > 
            <button style={{backgroundColor: 'white', 
                        height: '4.1vh', 
                        width: '8vw', 
                        marginTop: '1vh', 
                        border: 'none', 
                        color: '#01b6f0',
                        borderRadius: 'calc(0.25vh + 0.25vw)',
                        marginLeft: '2.5vw',
                        cursor: 'pointer',}}
                        onClick={()=>dispatch({type: 'SWITCH'})} >Show Both </button>
        </div>
    )
}

export default Header