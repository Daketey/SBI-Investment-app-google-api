/* eslint-disable no-unused-expressions */

import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Highcharts from 'highcharts';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import {useDispatch, useSelector} from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";

const renderChart=(x_axis, y_axis1, y_axis2, y_axis3, y_axis4, y_axis5, y_axis6)=>{
    const chart = Highcharts.chart('category',{
        chart:{
            backgroundColor:'rgba(255, 255, 255, 0.0)',
            zoomType: 'xy',
        },

        title:{
            text:null
        },

        plotOptions:{
            series:{
                borderWidth: 0.
                
            }
        },
        yAxis:{
            gridLineWidth: 0.25,
            
        },
        xAxis:{
            gridLineWidth: 0.25,
            style:{
                color: '#141414',
                fontSize: 10,
                fontWeight: 300,
                textAlign: 'center',
            },
            
            categories: x_axis,
        },
        credits:{
            enabled: false,
        },


        series: [
            {
            name: "balance",
            data: y_axis1,
            },
            {
            name: "bond",
            data: y_axis2,
            },  
            {
            name: "corporate",
            data: y_axis3,
            },   
            {
            name: "equity",
            data: y_axis4,
            },   
            {
            name: "growth",
            data: y_axis5,
            },
            {
            name: "midcap",
            data: y_axis6,
            },     
        ]
    });
    chart.setSize(1100, 600);
    return chart;
}


export default function Graphcard(){
    const dispatch = useDispatch();
    const[from, setFrom] = useState(new Date());
    const[to, setTo] = useState(new Date());
    const {data} = useSelector((state)=> state.sbiLife)


    useEffect(()=>{
        data!=null?renderChart(data.date, data.balance, data.bond, data.corporate, data.equity, data.growth, data.midcap): " ";
    }, [data])
    const useStyles = makeStyles({
        bigBox: {
          backgroundColor: 'rgb(20, 20, 20)',
          width: '70vw',
          height: '87vh',
          marginBottom: '2vh',
          color: 'white',
          position: 'absolute',
          top: '-2vh',
          left: '26vw'
        },
      });
    const classes = useStyles();
    const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <div
        style={{
            background: 'transparent', 
            color: 'white', 
            border: '0.05vh solid rgb(201, 201, 201)',
            width: '10vw',
            height: '3.5vh',
            fontSize: 'calc(0.5vh + 0.6vw)',
            paddingLeft: '0.5vw',
            paddingTop: '0.2vh',
            marginTop: '1vh'}}
            className="example-custom-input" onClick={onClick} ref={ref}>
            <CalendarTodayIcon style={{fontSize: 'calc(0.75vh + 0.75vw)', paddingRight: '0.5vw', marginRight: '0.5vw',position: 'relative', top: '0.4vh', borderRight: '0.001vh solid white'}}/>
            {value}
        </div>
      ));
    return(
        <Paper className={classes.bigBox} > 
        <h2 style={{color: 'white', position: 'fixed', top: '10vh', left: '30vw'}}>SBI Life</h2>
        <div style={{display: 'flex', marginTop: '2.5vh', color: 'rgb(201, 201, 201)'}}>
        <div style={{marginLeft: '20vw'}}>
            From: <br/>
            <DatePicker
                format="dd-MM-y"
                onChange={(e)=>setFrom(e)}
                selected={from}
                customInput={<CustomInput />}
            />
        </div>
        <div style={{marginLeft: '2vw'}} >
            To: <br/>
            <DatePicker
                format="dd-MM-y"
                onChange={(e)=>{setTo(e);
                                console.log(e.toLocaleDateString('en-GB', {
                                    day: '2-digit', month: 'short', year: 'numeric'
                                  }).replace(/ /g, '-'))}}
                selected={to}
                customInput={<CustomInput />}
            />
        </div>
        <button style={{backgroundColor: '#01b6f0', 
                        height: '4.1vh', 
                        width: '8vw', 
                        marginTop: '3.6vh', 
                        border: 'none', 
                        color: 'white',
                        borderRadius: 'calc(0.25vh + 0.25vw)',
                        marginLeft: '2vw',
                        cursor: 'pointer',}}
                        onClick={()=>{
                            dispatch({type: "TO_DATE", payload: to.toLocaleDateString('en-GB', {day: '2-digit', month: 'short', year: 'numeric'}).replace(/ /g, '-')});
                            dispatch({type: "FROM_DATE", payload: from.toLocaleDateString('en-GB', {day: '2-digit', month: 'short', year: 'numeric'}).replace(/ /g, '-')});
                            dispatch({type: "SBI_LIFE"});
                          }}>
                              Search</button>
        </div>
        <div id='category' style={{position: 'relative', top: '1.5vh', left: '0.5vw'}} /></Paper>
    )
}