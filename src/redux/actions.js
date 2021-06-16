import * as actionTypes from './actionTypes';

export function placeMyShip(payload) {
    return {
        type: actionTypes.PLACE_MY_SHIP,
        payload:payload
    }
}

export function clearState() {
    return {
        type: 'CLEAR_STATE',
    }
}

export function setLength(payload) {
    return {
        type: actionTypes.SET_LENGTH,
        payload:payload
    }
}

export function rotate() {
    return {
        type: actionTypes.ROTATE,
    }
}



export function decrementShipt(payload) {
    return {
        type: actionTypes.PUT_SHIP_INTO_THE_BUFFER,
        payload:payload
    }
}

export function putShipIntoTheBuffer() {
    return {
        type: actionTypes.DECREMET_SHIPS,
    }
}
