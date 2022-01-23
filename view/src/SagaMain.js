import { takeLatest, takeEvery } from "redux-saga/effects";
import getSbiLife from './sagas/getSbiLife';
import getSbiMutual from './sagas/getSbiMutual';
import getMutual from './sagas/getMutual';

export default function* sagaMain(){
    yield takeLatest("SBI_LIFE", getSbiLife);
    yield takeLatest("SBI_MUTUAL", getSbiMutual);
    yield takeLatest("SIP_MUTUAL", getMutual);
}