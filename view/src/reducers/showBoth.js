export default (state={data:false}, action) =>{
    switch(action.type){
        case 'SWITCH':
            return {...state, data: !state.data}
        case 'SWITCH_FALSE':
                return {...state, data: false}
        default:
            return state
    }
}