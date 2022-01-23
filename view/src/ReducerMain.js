import {combineReducers} from 'redux';
import graph from './reducers/graph';
import toDate from './reducers/toDate';
import fromDate from './reducers/fromDate';
import sbiLife from './reducers/sbiLife';
import sbiMutual from './reducers/sbiMutual';
import getMutual from './reducers/getMutual';
import showBoth from './reducers/showBoth';

export default combineReducers({
    graph,
    toDate,
    fromDate,
    sbiLife,
    sbiMutual,
    showBoth,
    getMutual,
});