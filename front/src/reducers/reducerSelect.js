export default function reducerSelect(state = 0, action) {
    console.log("reducer : ", action.payload);
    switch(action.type) {
        case 'SHOW_SELECT_TYPE':
            return action.payload
        default:
            return state;
    }
}
