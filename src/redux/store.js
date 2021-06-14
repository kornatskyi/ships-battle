import { configureStore } from '@reduxjs/toolkit'
import fieldReducer from './fieldSlice'
import enemiesFieldReducer from './enemiesFieldSlice'
import {testReducer} from './testReducer'

export default configureStore({
  reducer: {
      myField: fieldReducer,
      enemiesField: enemiesFieldReducer,
      test: testReducer

  }
})