import { configureStore } from '@reduxjs/toolkit'
import myFieldReducer from './reducers/myFieldReducer'
import shipReducer from './reducers/shipReducer'
import shipsBufferReducer from './reducers/shipsBufferReducer'

export default configureStore({
  reducer: {
    myField: myFieldReducer,
    ship: shipReducer,
    shipsBuffer: shipsBufferReducer
  }
})