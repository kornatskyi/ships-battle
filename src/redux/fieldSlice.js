import { createSlice } from '@reduxjs/toolkit'

export const fieldSlice = createSlice({
  name: 'field',
  initialState: {
    grid: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  },
  reducers: {
    //action.paiload should looks like [{x:<number>, y:<number>},{x:<number>, y:<number>} ... {x:<number>, y:<number>}]
    changeField: (state, action) => {
      console.log(state);
      action.payload.forEach(coordinate => {
        state.grid[coordinate.x][coordinate.y] = 1;
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeField } = fieldSlice.actions

export default fieldSlice.reducer