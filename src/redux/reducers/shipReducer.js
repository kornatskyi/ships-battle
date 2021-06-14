import { PLACE_MY_SHIP, ROTATE, SET_LENGTH } from "../actionTypes";
import { createReducer } from '@reduxjs/toolkit'


const [VERTICAL, HORISONTAL] = ["VERTICAL", "HORISONTAL"];

const initialState = {
    length: 0,
    direction: HORISONTAL
};
//using createReducer to simplify code. it makes possible to write mutable code
const shipReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_LENGTH, (state, action) => {

            state.length = action.payload

        })
        .addCase(ROTATE, (state) => {
            state.direction = (state.direction === VERTICAL ? HORISONTAL : VERTICAL);
        })

})

export default shipReducer;