import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IFormState {
  tower: string,
  floor: string,
  room: string,
  date: Date,
  comment: string,
  isAgree: boolean,
  errorList: string[]
}

const initialState: IFormState = {
  tower: '',
  floor: '',
  room: '',
  date: new Date(),
  comment: '',
  isAgree: false,
  errorList: []
}


export const formStateSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setBookDate(state, action: PayloadAction<Date>) {
      if (action.payload === undefined) return { ...state, date: new Date() }
      console.log(action.payload)
      return { ...state, date: action.payload }
    },
    setComment(state, action: PayloadAction<string>) {
      return { ...state, comment: action.payload }
    },
    setTower(state, action: PayloadAction<string>) {
      return { ...state, tower: action.payload }
    },
    setFloor(state, action: PayloadAction<string>) {
      return { ...state, floor: action.payload }
    },
    setRoom(state, action: PayloadAction<string>) {
      return { ...state, room: action.payload }
    },
    setAgree(state, action: PayloadAction<boolean>) {
      return { ...state, isAgree: action.payload }
    },

    clearForm(state) {
      return {
        ...state,
        tower: '',
        floor: '',
        room: '',
        date: new Date('01-01-2023'),
        comment: '',
        errorList: []
      }
    },

    setFormStatus(state, action: PayloadAction<string[]>) {
      return { ...state, errorList: action.payload }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setBookDate, setComment, setTower, setFloor, setRoom, setAgree, clearForm, setFormStatus } = formStateSlice.actions

export default formStateSlice.reducer