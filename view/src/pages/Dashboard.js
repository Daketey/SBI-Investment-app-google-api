/* eslint-disable no-unused-expressions */
import React, { Component, useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import GraphcardLife from '../utils/GraphcardLife';
import GraphcardMutual from '../utils/GraphcardMutual';
import GraphBoth from '../utils/GraphBoth';
import BoxesLife from '../utils/BoxesLife';
import BoxesMutual from '../utils/BoxNewMutual';
import BoxeNewMutual from '../utils/BoxesMutual';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

export default function Dashboard (){
    const dispatch = useDispatch();
    const[error, setError] = useState(false);
    const[fund, setFund] = useState(false);
    const {data} = useSelector((state)=>state.showBoth)
    const mutual = useSelector((state)=> state.getMutual)
    console.log(mutual)
    const useStyles = makeStyles({
        bottomBox: {
          backgroundColor: 'rgb(20, 20, 20)',
          width: '81.2vw',
          height: '9.25vh',
          marginBottom: '2vh',
          paddingLeft: '2vw',
          paddingTop: '2vh',
          color: 'white',
          position: 'absolute',
          top: '74vh',
          borderTop: '0.5vh solid green',
        },
      });
      const classes = useStyles();
    return(
        <div>
        <div style={{position: 'absolute', left: '1.8vw', top: '12vh'}}>
        <div  style={{display: 'flex'}}>
        {data?<h2 style={{marginTop: '-4vh', color: 'white'}}> SBI Life</h2>:''}
         {data? <h2 style={{marginTop: '-4vh', marginLeft: '7.9vw',color: 'white', cursor: 'pointer'}} onClick={()=>{setFund(false); dispatch({type: 'SWITCH_FALSE'});}} > SBI Mutual </h2>:<h2 style={{marginTop: '-4vh', marginLeft: '1vw',color: 'white', cursor: 'pointer'}} onClick={()=>{setFund(false); dispatch({type: 'SWITCH_FALSE'});}} > SBI Mutual ({mutual.data?mutual.data.count: ''}) <p style={{fontSize: 'calc(0.75vh + 0.75vw)', marginBottom: '-2vh',marginTop: '-0.1vh', fontWeight:'normal', color:'grey' }}>SIP Investment</p></h2>}
        </div>
          {data? <GraphBoth /> : fund?  <GraphcardLife />: <GraphcardMutual /> }
          <div style={{display: 'flex', overflow: 'hidden'}}>
          {data? <BoxesLife /> : ''}
          {data?<BoxesMutual /> : <BoxeNewMutual />}
          </div>
        </div>
      </div>
    )
}