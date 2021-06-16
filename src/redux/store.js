import { configureStore } from '@reduxjs/toolkit'
import myFieldReducer from './reducers/myFieldReducer'
import shipReducer from './reducers/shipReducer'

export default configureStore({
  reducer: {
    myField: myFieldReducer,
    ship: shipReducer

  }
})