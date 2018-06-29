export default function reducerDetailsAttractions(state = 0, action) {
    console.log("reducer : ", action.payload);
    switch(action.type) {
        case 'SHOW_DATA_BOX':
            return action.payload  
        default:
            return state;
    }
}