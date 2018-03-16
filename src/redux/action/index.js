export const ADD_SET = 'ADD_SET';
export const DEC_SET = 'DEC_SET';
export const CHANAGE_SET = 'CHANAGE_SET';
export const HTTP_GET = 'HTTP_GET';

export function addNum(data) {
    return{
        type:ADD_SET,
        data
    }
}

export function decNum(data) {
    return {
        type:DEC_SET,
        data
    }
}

export function chanageNum(data){
    return {
        type:CHANAGE_SET,
        data
    }
}

export function httpGet(data){
    return {
        type:HTTP_GET,
        data
    }
}