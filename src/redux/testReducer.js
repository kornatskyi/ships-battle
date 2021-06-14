import {SET_TEST} from './ActionTypes'

export const testReducer = (state={message:"test"}, action) => {
    switch (action.type){
        case SET_TEST: {
            return state + action.payload
        }
        default:{
            return state // We return the default state here
         }
    }

}