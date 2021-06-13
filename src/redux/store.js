import { configureStore } from '@reduxjs/toolkit'
import fieldReducer from './fieldSlice'
import enemiesFieldReducer from './enemiesFieldSlice'

export default configureStore({
  reducer: {
      myField: fieldReducer,
      enemiesField: enemiesFieldReducer,
  },
})