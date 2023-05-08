import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = false

export const popoutStateSlice = createSlice({
  name: 'popout',
  initialState,
  reducers: {
    setPopoutState(_, action: PayloadAction<boolean>) {
      return action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPopoutState } = popoutStateSlice.actions

export default popoutStateSlice.reducer