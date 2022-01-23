export default (state={data:null}, action) =>{
    switch(action.type){
        case 'GRAPH_DATA':
            return {...state, data: action.payload}
        default:
            return state
    }
}