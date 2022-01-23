import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import {useSelector} from 'react-redux';

export default function BoxesLife(){
    const {data} = useSelector((state)=>state.sbiLife)

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
            Balance 
            <p style={{position: 'relative',top: '-1.5vh'}}>
                <b className={classes.value} >{data?data.balance?(data.balance.pop()).toFixed(2):'':''} </b>
                %
            </p>
        </Paper>
        <Paper className={classes.box}  >
            Bond 
            <p style={{position: 'relative',top: '-1.5vh'}}>
                <b className={classes.value} >{data?data.bond?(data.bond.pop()).toFixed(2):'':''} </b>
                %
            </p>
        </Paper>
        <Paper className={classes.box}  >
            Corporate 
            <p style={{position: 'relative',top: '-1.5vh'}}>
                <b className={classes.value} >{data?data.corporate?(data.corporate.pop()).toFixed(2):'':''} </b>
                %
            </p>
        </Paper>
        <Paper className={classes.box}  >
            Equity
            <p style={{position: 'relative',top: '-1.5vh'}}>
                <b className={classes.value} >{data?data.equity?(data.equity.pop()).toFixed(2):'':''} </b>
                %
            </p>
        </Paper>
        <Paper className={classes.box}  >
            Growth
            <p style={{position: 'relative',top: '-1.5vh'}}>
                <b className={classes.value} >{data?data.growth?(data.growth.pop()).toFixed(2):'':''} </b>
                %
            </p>
        </Paper>
        <Paper className={classes.box}  >
            Midcap
            <p style={{position: 'relative',top: '-1.5vh'}}>
                <b className={classes.value} >{data?data.midcap?(data.midcap.pop()).toFixed(2):'':''} </b>
                %
            </p>
        </Paper>
      </div>
    )
}