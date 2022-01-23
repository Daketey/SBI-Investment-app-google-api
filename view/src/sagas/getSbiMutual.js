/* eslint-disable no-unused-expressions */
import {put, call, select} from 'redux-saga/effects';
import axios from 'axios';

const getGraphData = (to, from) => {
    return axios.post(`/root/getMutualData?toDate=${to}&fromDate=${from}`)
    .then(response =>response) 
    .catch(error=> error);
}

const toDate = (state)=>state.toDate;
const fromDate = (state)=> state.fromDate;

export default function* getSbiLife(){
    const {to} = yield select(toDate);
    const {from} = yield select(fromDate);
    console.log(to);
    console.log(from);
    const response = yield call(()=> getGraphData(to, from));
    console.log(response);
    if(response){
        yield put({
            type: "GET_SBI_MUTUAL",
            payload: response.data,
        });
    }
    else{
        console.log("error")
    }
}
