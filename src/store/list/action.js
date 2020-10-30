import * as call from './actionType';

export const savePoints = (data) =>{    //设置action
    return {
        type: call.GETPOINTS,
        data,
    }
}

export const saveCallList = (data) =>{    //设置action
    return {
        type: call.GETCALLLIST,
        data,
    }
}


