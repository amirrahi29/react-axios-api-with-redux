export const productReducers = (state = [], action)=>{
    switch(action.type){
        case 'GET_PRODUCTS':
            return action.payload;
        default:
            return state;
    }
}