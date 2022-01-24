import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import {useSelector} from 'react-redux';

export default function BoxesMutual(){
    const {data} = useSelector((state)=>state.getMutual)
    const dataM = useSelector((state)=>state.sbiMutual)

    const useStyles = makeStyles({
        box: {
          backgroundColor: 'rgb(20, 20, 20)',
          width: '20vw',
          height: '11.15vh',
          marginBottom: '2vh',
          borderLeft: '0.5vh solid #01b6f0',
          color: 'white',
          paddingLeft: '1vw',
          paddingTop: '1vh',
          color: 'rgb(201, 201, 201)',
          marginLeft: '1vw',
          overflow: 'hidden'
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
                 <b className={classes.value} >Abs. : {dataM.data?dataM.data.hybrid?(dataM.data.hybrid[dataM.data.hybrid.length-1]).toFixed(2):'':''} </b>
                %  <br/>
                 <b style={{color:'hsl(194,99%,47%)'}}> SIP: {data?data.hybridSip?(data.hybridSip).toFixed(2):'':''} %</b>  &nbsp; ({data?data.hybrid?(data.hybrid).toFixed(2):'':''})
            </p>
        </Paper>
        <Paper className={classes.box}  >
            Mag. Eq. ESG
            <p style={{position: 'relative',top: '-1.5vh'}}>
                 <b className={classes.value} >Abs. : {dataM.data?dataM.data.hybrid?(dataM.data.magEquity[dataM.data.magEquity.length-1]).toFixed(2):'':''} </b>
                %  <br/>
                 <b style={{color:'hsl(194,99%,47%)'}}> SIP: {data?data.equitySip?(data.equitySip).toFixed(2):'':''} %</b>  &nbsp; ({data?data.magEquity?(data.magEquity).toFixed(2):'':''})
            </p>
        </Paper>
        <Paper className={classes.box}  >
            Mag. Midcap
            <p style={{position: 'relative',top: '-1.5vh'}}>
                 <b className={classes.value} >Abs. : {dataM.data?dataM.data.magMidcap?(dataM.data.magMidcap[dataM.data.magMidcap.length-1]).toFixed(2):'':''} </b>
                %  <br/>
                 <b style={{color:'hsl(194,99%,47%)'}}> SIP: {data?data.magMidcapSip?(data.magMidcapSip).toFixed(2):'':''} %</b>  &nbsp; ({data?data.magMidcap?(data.magMidcap).toFixed(2):'':''})
            </p>
        </Paper>
        <Paper className={classes.box}  >
            Smallcap
            <p style={{position: 'relative',top: '-1.5vh'}}>
                 <b className={classes.value} >Abs. : {dataM.data?dataM.data.smallcap?(dataM.data.smallcap[dataM.data.smallcap.length-1]).toFixed(2):'':''} </b>
                %  <br/>
                 <b style={{color:'hsl(194,99%,47%)'}}> SIP: {data?data.smallcapSip?(data.smallcapSip).toFixed(2):'':''} %</b>  &nbsp; ({data?data.smallcap?(data.smallcap).toFixed(2):'':''})
            </p>
        </Paper>
        <Paper className={classes.box}  >
            Focused Equity
            <p style={{position: 'relative',top: '-1.5vh'}}>
                 <b className={classes.value} >Abs. : {dataM.data?dataM.data.focused?(dataM.data.focused[dataM.data.focused.length - 1]).toFixed(2):'':''} </b>
                %  <br/>
                 <b style={{color:'hsl(194,99%,47%)'}}> SIP: {data?data.focusedSip?(data.focusedSip).toFixed(2):'':''} %</b>  &nbsp; ({data?data.focused?(data.focused).toFixed(2):'':''})
            </p>

        </Paper>
        <Paper className={classes.box}  >
            Large Cap
            <p style={{position: 'relative',top: '-1.5vh'}}>
                 <b className={classes.value} >Abs. : {dataM.data?dataM.data.large?(dataM.data.large[dataM.data.large.length - 1 ]).toFixed(2):'':''} </b>
                %  <br/>
                 <b style={{color:'hsl(194,99%,47%)'}}> SIP: {data?data.large?(data.largeSip).toFixed(2):'':''} %</b>  &nbsp; ({data?data.large?(data.large).toFixed(2):'':''})
            </p>
        </Paper>
      </div>
    )
}