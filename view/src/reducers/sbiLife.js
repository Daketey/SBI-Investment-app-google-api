export default (state={data:null}, action) =>{
    switch(action.type){
        case 'GET_SBI_LIFE':
            return {...state, data: action.payload}
        default:
            return state
    }
}