import { DECREMET_SHIPS,PUT_SHIP_INTO_THE_BUFFER } from "../actionTypes";
import { createReducer } from '@reduxjs/toolkit'



const initialState = {
    x4: 1,
    x3: 2,
    x2: 3,
    x1: 4,
    buffer: ""
};

//using createReducer to simplify code. it makes possible to write mutable code
const shipsBufferReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(DECREMET_SHIPS, (state, action) => {
            const { type } = action.payload
            switch (type) {
                case 'x4':
                    state.x4--;
                    break;
                case 'x3':
                    state.x3--;
                    break;
                case 'x2':
                    state.x2--;
                    break;
                case 'x1':
                    state.x1--;
                    break;
                default:
                    return state;

            }

        })
        .addCase(PUT_SHIP_INTO_THE_BUFFER, (state, action) => {
            state.buffer = action.payload.type;
        })

})

export default shipsBufferReducer;