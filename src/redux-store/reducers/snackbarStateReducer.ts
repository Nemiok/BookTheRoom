import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TSnackBarState = string
const initialState: TSnackBarState = ''

export const snackbarStateSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    setSnackbarState(_, action: PayloadAction<TSnackBarState>) {
      return action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSnackbarState } = snackbarStateSlice.actions

export default snackbarStateSlice.reducer