export default (state={to:null}, action) =>{
    switch(action.type){
        case 'TO_DATE':
            return {...state, to: action.payload}
        default:
            return state
    }
}