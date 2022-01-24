import { takeLatest, takeEvery } from "redux-saga/effects";
import getLifeData from './sagas/getLifeData';
import getSipData from './sagas/getSipData';
import getMutualData from './sagas/getMutualData';

export default function* sagaMain(){
    yield takeLatest("SBI_LIFE", getLifeData);
    yield takeLatest("SBI_MUTUAL", getMutualData);
    yield takeLatest("SIP_MUTUAL", getSipData);
}