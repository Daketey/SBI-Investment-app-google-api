export default (state={data:null}, action) =>{
    switch(action.type){
        case 'GET_SIP_MUTUAL':
            return {...state, data: action.payload}
        default:
            return state
    }
}