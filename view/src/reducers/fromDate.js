export default (state={from:null}, action) =>{
    switch(action.type){
        case 'FROM_DATE':
            return {...state, from: action.payload}
        default:
            return state
    }
}