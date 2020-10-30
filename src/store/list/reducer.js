import * as call from './actionType';

let defaultState = {   
    getList:'',
    getCallList:'',
}

export const getCallPoints = ( state = defaultState, action = {})=>{
    
    switch(action.type){
        case call.GETPOINTS:
            
            return{...state,...{getList:action.data}};
        case call.GETCALLLIST:
            
            return{...state,...{getCallList:action.data}};
            
        default:
            return state;
    }
}