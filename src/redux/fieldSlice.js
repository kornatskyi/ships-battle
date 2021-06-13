import { createSlice } from '@reduxjs/toolkit'

export const fieldSlice = createSlice({
  name: 'field',
  initialState: {
    grid: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]
  },
  reducers: {
    changeField: (state, action) => {
      state.grid[action.payload] = 1;

    },
    setShipOnTheField:(state, action) => {
        action.payload.forEach(cellNumber => {
          state.grid[cellNumber] = 1;
        })
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeField, setShipOnTheField } = fieldSlice.actions

export default fieldSlice.reducer

