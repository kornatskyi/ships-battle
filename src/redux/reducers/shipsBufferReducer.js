import { DECREMENT_SHIPS, PUT_SHIP_INTO_THE_BUFFER, ROTATE } from "../actionTypes";
import { createReducer } from '@reduxjs/toolkit'

const [VERTICAL, HORISONTAL] = ["VERTICAL", "HORISONTAL"];


const initialState = {
    x4: 1,
    x3: 2,
    x2: 3,
    x1: 4,
    buffer: { length: "", direction: HORISONTAL }
};

//using createReducer to simplify code. it makes possible to write mutable code
const shipsBufferReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(DECREMENT_SHIPS, (state, action) => {
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
            state.buffer.length = action.payload.length;
        })
        .addCase(ROTATE, (state) => {
            state.buffer.direction = (state.buffer.direction === VERTICAL ? HORISONTAL : VERTICAL);
        })

})

export default shipsBufferReducer;