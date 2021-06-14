import * as actionTypes from './actionTypes';

export const setTest = (payload) => ({
    type: actionTypes.SET_TEST,
    payload: payload
});

export function addArticle(payload) {
    return { type: actionTypes.ADD_ARTICLE, payload }
};

export function setShip(payload) {
    return {
        type: actionTypes.SET_SHIP,
        payload:payload
    }
}

export function clearState() {
    return {
        type: 'CLEAR_STATE',
    }
}