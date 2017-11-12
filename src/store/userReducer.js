
const USER_INIT = 'USER_INIT';

export function userInit(user = {}){
    return {
        type : USER_INIT,
        payload : user   
    }
}


export default function userReducer(state = {}, action){
    switch (action.type) {
        case USER_INIT:
            return Object.assign({}, action.payload);
        default:
            return state;
    }
}