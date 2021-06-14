import { configureStore } from '@reduxjs/toolkit'
import fieldSlice from './fieldSlice'
import enemiesFieldReducer from './enemiesFieldSlice'
import { testReducer } from './testReducer'
import fieldReducer from './reducers/fieldReducer'

export default configureStore({
  reducer: {
    myField: fieldSlice,
    enemiesField: enemiesFieldReducer,
    test: testReducer,
    field: fieldReducer

  }
})