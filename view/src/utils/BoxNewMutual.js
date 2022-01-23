import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import {useSelector} from 'react-redux';

export default function BoxesLife(){
    const {data} = useSelector((state)=>state.sbiMutual)
    console.log(data)

    const useStyles = makeStyles({
        box: {
          backgroundColor: 'rgb(20, 20, 20)',
          width: '9.5vw',
          height: '11.15vh',
          marginBottom: '2vh',
          borderLeft: '0.5vh solid #01b6f0',
          color: 'white',
          paddingLeft: '1vw',
          paddingTop: '1vh',
          color: 'rgb(201, 201, 201)',
          marginLeft: '2.25vw',
        },
        value:{
            color: 'white',
            fontSize: 'calc( 1.00vh + 1.00vw)',
            fontWeight: 500,
        }
      });
      const classes = useStyles();
    return(
        <div>
        <Paper className={classes.box}  >
            Equity Hybrid
            <p style={{position: 'relative',top: '-1.5vh'}}>
                <b className={classes.value} >{data?data.hybrid?(data.hybrid[data.hybrid.length-1]).toFixed(2):'':''} </b>
                %
            </p>
        </Paper>
        <Paper className={classes.box}  >
        Mag. Eq. ESG 
            <p style={{position: 'relative',top: '-1.5vh'}}>
                <b className={classes.value} >{data?data.magEquity?(data.magEquity[data.magEquity.length-1]).toFixed(2):'':''} </b>
                %
            </p>
        </Paper>
        <Paper className={classes.box}  >
        Mag. Midcap 
            <p style={{position: 'relative',top: '-1.5vh'}}>
                <b className={classes.value} >{data?data.magMidcap?(data.magMidcap[data.magMidcap.length-1]).toFixed(2):'':''} </b>
                %
            </p>
        </Paper>
        <Paper className={classes.box}  >
        Smallcap
            <p style={{position: 'relative',top: '-1.5vh'}}>
                <b className={classes.value} >{data?data.smallcap?(data.smallcap[data.smallcap.length-1]).toFixed(2):'':''} </b>
                %
            </p>
        </Paper>
        <Paper className={classes.box}  >
        Focused Equity
            <p style={{position: 'relative',top: '-1.5vh'}}>
                <b className={classes.value} >{data?data.focused?(data.focused[data.focused.length - 1]).toFixed(2):'':''} </b>
                %
            </p>
        </Paper>
        <Paper className={classes.box}  >
        Large Cap
            <p style={{position: 'relative',top: '-1.5vh'}}>
                <b className={classes.value} >{data?data.large?(data.large[data.large.length - 1 ]).toFixed(2):'':''} </b>
                %
            </p>
        </Paper>
      </div>
    )
}